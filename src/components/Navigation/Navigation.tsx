import './Navigation.scss';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = ['About', 'Projects', 'Skills', 'Contact'];

	return (
		<nav className='navigation'>
			<div className='navigation__container'>
				<div className='navigation__content'>
					<div className='navigation__logo'>
						<div className='navigation__logo-glow' />
						<div className='navigation__logo-box'>
							<Code2 className='navigation__logo-icon' />
						</div>
						<span className='navigation__logo-text'>DevPortfolio</span>
					</div>

					<div className='navigation__menu'>
						{navItems.map((item) => (
							<a key={item} href={`#${item.toLowerCase()}`} className='navigation__link'>
								{item}
								<span className='navigation__link-underline' />
							</a>
						))}
					</div>

					<button type='button' onClick={() => setIsOpen(!isOpen)} className='navigation__toggle'>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{isOpen && (
					<div className='navigation__mobile-menu'>
						{navItems.map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								onClick={() => setIsOpen(false)}
								className='navigation__mobile-link'
							>
								{item}
							</a>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
