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
						<p className='hero__badge-text'>Let's see how deep the rabbit hole goes</p>
					</div>
				</div>

				<h1 className='hero__title'>
					<span className='hero__title-main'>Software Developer,</span>
					<span className='hero__title-sub'>Fitness Pro & Adventurer</span>
				</h1>

				<p className='hero__description'>
					I’m Cameron, a former fitness pro who traded kettlebells for code. For 15 years, I ran a private
					personal training studio and built an online coaching platform with BluePhoenix Fitness, helping
					clients transform through hard work and dedication. But a childhood passion for coding—those late
					nights solving problems and building things on my computer—kept calling.
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
