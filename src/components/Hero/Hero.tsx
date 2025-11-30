import './Hero.scss';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
	return (
		<section className='hero'>
			<div className='hero__background'>
				<div className='hero__blob hero__blob--1' />
				<div className='hero__blob hero__blob--2' />
			</div>

			<div className='hero__content'>
				<div className='hero__badge'>
					<div className='hero__badge-glow' />
					<div className='hero__badge-box'>
						<p className='hero__badge-text'>Welcome to the future</p>
					</div>
				</div>

				<h1 className='hero__title'>
					<span className='hero__title-main'>Software Developer</span>
					<span className='hero__title-sub'>& Creative Coder</span>
				</h1>

				<p className='hero__description'>
					Crafting digital experiences that blend creativity with cutting-edge technology. Building the
					future, one line of code at a time.
				</p>

				<div className='hero__buttons'>
					<a href='#projects' className='hero__button hero__button--primary'>
						<div className='hero__button-glow' />
						<div className='hero__button-content'>
							View My Work
							<ArrowRight className='hero__button-icon' />
						</div>
					</a>

					<a href='#contact' className='hero__button hero__button--secondary'>
						Get In Touch
					</a>
				</div>

				<div className='hero__socials'>
					{[
						{ icon: Github, label: 'GitHub' },
						{ icon: Linkedin, label: 'LinkedIn' },
						{ icon: Mail, label: 'Email' },
					].map(({ icon: Icon, label }) => (
						<a key={label} href='/' className='hero__social' aria-label={label}>
							<Icon className='hero__social-icon' />
						</a>
					))}
				</div>
			</div>

			<div className='hero__scroll-indicator' />
		</section>
	);
}
