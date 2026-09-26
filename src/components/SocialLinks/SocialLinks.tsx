import { links } from '../../data/portfolio';
import './SocialLinks.scss';

const socialLinks = [
	{ label: 'GitHub', href: links.github, iconClass: 'fa-github' },
	{ label: 'LinkedIn', href: links.linkedin, iconClass: 'fa-linkedin' },
	{ label: 'Instagram', href: links.instagram, iconClass: 'fa-instagram' },
	{ label: 'X', href: links.x, iconClass: 'fa-x-twitter' },
];

export function SocialLinks(): JSX.Element {
	return (
		<nav className='social-links' aria-label='Social links'>
			{socialLinks.map((socialLink) => (
				<a
					href={socialLink.href}
					title={socialLink.label}
					target='_blank'
					rel='noreferrer'
					key={socialLink.label}
				>
					<i className={`fa-brands ${socialLink.iconClass}`} aria-hidden='true' />
					<span className='social-links__label'>{socialLink.label}</span>
				</a>
			))}
		</nav>
	);
}
