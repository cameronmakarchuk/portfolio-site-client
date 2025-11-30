import './About.scss';
import { Sparkles, Terminal, Zap } from 'lucide-react';

export default function About() {
	const highlights = [
		{
			icon: Terminal,
			title: 'Clean Code',
			description: 'Writing maintainable, scalable code that stands the test of time',
		},
		{
			icon: Zap,
			title: 'Performance',
			description: 'Optimizing for speed and efficiency in every project',
		},
		{
			icon: Sparkles,
			title: 'Innovation',
			description: 'Exploring new technologies and pushing creative boundaries',
		},
	];

	return (
		<section id='about' className='about'>
			<div className='about__container'>
				<div className='about__header'>
					<h2 className='section-title'>About Me</h2>
				</div>

				<div className='about__grid'>
					<div className='about__text-box'>
						<div className='about__text-glow' />
						<div className='about__text-content'>
							<p className='about__text'>
								I'm a passionate software developer with a love for creating immersive digital
								experiences. My journey in tech has been driven by curiosity and a desire to build
								solutions that make a difference.
							</p>
							<p className='about__text'>
								When I'm not coding, you'll find me exploring the latest tech trends, contributing to
								open-source projects, or experimenting with creative coding and generative art.
							</p>
						</div>
					</div>

					<div className='about__highlights'>
						{highlights.map(({ icon: Icon, title, description }) => (
							<div key={title} className='about__highlight'>
								<div className='about__highlight-icon-box'>
									<Icon className='about__highlight-icon' />
								</div>
								<div>
									<h3 className='about__highlight-title'>{title}</h3>
									<p className='about__highlight-description'>{description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
