import './Projects_new.scss';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
	const projects = [
		{
			title: 'Cyberpunk Dashboard',
			description: 'Real-time analytics dashboard with neon aesthetics and smooth animations',
			tags: ['React', 'TypeScript', 'D3.js'],
		},
		{
			title: 'AI Code Assistant',
			description: 'Intelligent coding companion powered by machine learning',
			tags: ['Python', 'TensorFlow', 'FastAPI'],
		},
		{
			title: 'Retro Gaming Platform',
			description: 'Web-based gaming platform with 80s arcade vibes',
			tags: ['WebGL', 'Three.js', 'Node.js'],
		},
		{
			title: 'Blockchain Explorer',
			description: 'Modern interface for exploring blockchain transactions',
			tags: ['Web3', 'React', 'Ethereum'],
		},
	];

	return (
		<section id='projects' className='projects'>
			<div className='projects__container'>
				<div className='projects__header'>
					<h2 className='section-title'>Featured Projects</h2>
				</div>

				<div className='projects__grid'>
					{projects.map((project) => (
						<div key={project.title} className='projects__card'>
							<div className='projects__card-divider' />

							<h3 className='projects__card-title'>{project.title}</h3>

							<p className='projects__card-description'>{project.description}</p>

							<div className='projects__card-tags'>
								{project.tags.map((tag) => (
									<span key={tag} className='projects__tag'>
										{tag}
									</span>
								))}
							</div>

							<div className='projects__card-links'>
								<a href='#' className='projects__link'>
									<Github className='projects__link-icon' />
									<span>Code</span>
								</a>
								<a href='#' className='projects__link'>
									<ExternalLink className='projects__link-icon' />
									<span>Live Demo</span>
								</a>
							</div>

							<div className='projects__card-accent' />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
