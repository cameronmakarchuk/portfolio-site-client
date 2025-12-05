import './About.scss';
import { Sparkles, Terminal, Zap } from 'lucide-react';
import cmProfilePic from '../../assets/images/cam-profile-square.png';

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
					<h2 className='section-title'>From Sweat To Software: Life Rebooted</h2>
				</div>

				<div className='about__grid'>
					<div className='about__text-box'>
						<div className='about__text-glow' />
						<div className='about__text-content'>
							<div className='about__text-content-card'>
								<img
									className='about__profile-img'
									src={cmProfilePic}
									alt='Cameron Makarchuk head shot, colored background'
								/>
								<p className='about__text'>
									I’m Cameron, a former fitness pro who traded kettlebells for code. For 15 years, I
									ran a private personal training studio and built an online coaching platform with
									BluePhoenix Fitness, helping clients transform through hard work and dedication. But
									a childhood passion for coding—those late nights solving problems and building
									things on my computer—kept calling.
								</p>
							</div>
							<p className='about__text'>
								As a kid, I’d lose myself in the thrill of building things with code, grinning
								ear-to-ear when a tricky problem finally clicked. That spark never faded, even as a
								fitness pro.
							</p>

							<p className='about__text'>
								In 2015, I shifted my fitness business online, diving deeper into the digital world
								through marketing and website tinkering. That pull toward tech was too strong to ignore,
								so in 2022, I made the leap to software development full-time. Now, I craft code with
								the same focus I once brought to training plans.
							</p>

							<p className='about__text'>
								When I’m not at my desk, I’m hiking, cycling, or traveling the world, collecting
								experiences and the occasional odd souvenir. This is my story—part grit, part geek, all
								me.
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
