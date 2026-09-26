import { type FocusEvent, useEffect, useRef, useState } from 'react';
import type { NowItem } from '../../data/portfolio';
import './NowRotator.scss';

const ROTATION_INTERVAL_MS = 5000;
const FADE_DURATION_MS = 300;

type NowRotatorProps = {
	items: [NowItem, ...NowItem[]];
	updatedLabel: string;
};

export function NowRotator({ items, updatedLabel }: NowRotatorProps): JSX.Element {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isFadedOut, setIsFadedOut] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const fadeTimeoutRef = useRef<number>();

	const activeItem = items[activeIndex] ?? items[0];
	const isPaused = isHovered || isFocused;

	const showItem = (index: number) => {
		if (index === activeIndex) {
			return;
		}

		window.clearTimeout(fadeTimeoutRef.current);
		setIsFadedOut(true);

		fadeTimeoutRef.current = window.setTimeout(() => {
			setActiveIndex(index);
			setIsFadedOut(false);
		}, FADE_DURATION_MS);
	};

	const showNextItem = () => {
		showItem((activeIndex + 1) % items.length);
	};

	// Runs after every render so the interval always calls the latest showNextItem; any interaction
	// therefore restarts the countdown.
	useEffect(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (isPaused || prefersReducedMotion) {
			return;
		}

		const intervalId = window.setInterval(() => {
			if (!document.hidden) {
				showNextItem();
			}
		}, ROTATION_INTERVAL_MS);

		return () => window.clearInterval(intervalId);
	});

	useEffect(() => {
		return () => window.clearTimeout(fadeTimeoutRef.current);
	}, []);

	// Only keyboard focus pauses rotation; a mouse click on a tick shouldn't freeze it until the next click elsewhere.
	const handleFocus = (event: FocusEvent<HTMLElement>) => {
		if (event.target.matches(':focus-visible')) {
			setIsFocused(true);
		}
	};

	const handleBlur = (event: FocusEvent<HTMLElement>) => {
		const isFocusLeavingRotator = !event.currentTarget.contains(event.relatedTarget);

		if (isFocusLeavingRotator) {
			setIsFocused(false);
		}
	};

	return (
		<section
			className='now-rotator'
			aria-label='What I am up to now'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onFocus={handleFocus}
			onBlur={handleBlur}
		>
			<div className='now-rotator__header'>
				<span className='now-rotator__badge'>
					<span aria-hidden='true'>● </span>NOW
				</span>
				<span className='now-rotator__updated'>{updatedLabel}</span>
			</div>

			<button
				type='button'
				className={`now-rotator__item ${isFadedOut ? 'now-rotator__item--faded' : ''}`}
				title='Click for next'
				onClick={showNextItem}
			>
				<span className='now-rotator__label'>{activeItem.label}</span>
				<span className='now-rotator__text'>{activeItem.text}</span>
			</button>

			<div className='now-rotator__ticks'>
				{items.map((item, index) => (
					<button
						type='button'
						className={`now-rotator__tick ${index === activeIndex ? 'now-rotator__tick--active' : ''}`}
						aria-label={item.label}
						aria-pressed={index === activeIndex}
						onClick={() => showItem(index)}
						key={item.label}
					/>
				))}
			</div>
		</section>
	);
}
