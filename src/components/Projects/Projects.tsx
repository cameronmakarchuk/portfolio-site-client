import './Projects.scss';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
	const projects = [
		{
			title: 'RecLeague',
			description:
				'Responsive web app to find, register for, and manage recreational sports leagues in your area.',
			tags: ['Javascript', 'React', 'Sass', 'Node', 'Express.js', 'SQL', 'REST'],
			repoUrl: 'https://github.com/cameronmakarchuk/recleague-client',
			demoUrl: 'https://www.youtube.com/watch?v=tmo6_BDQmcc',
		},
		{
			title: 'HomeLab',
			description: 'Personal cloud with self-hosted services handling documents, photos, and media.',
			tags: ['Linux', 'Docker', 'Raspberry Pi', 'Cloudflare', 'NextCloud', 'Jellyfin', 'PhotoPrism'],
		},
		{
			title: 'Brainstorm',
			description: 'Mobile web app for teams to brainstorm, suggest, and vote on new ideas for projects.',
			tags: ['React', 'Javascript', 'Node', 'Express.js', 'REST'],
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
								{project.repoUrl && (
									<a href={project.repoUrl} className='projects__link'>
										<Github className='projects__link-icon' />
										<span>Code</span>
									</a>
								)}
								{project.demoUrl && (
									<a href={project.demoUrl} className='projects__link'>
										<ExternalLink className='projects__link-icon' />
										<span>Live Demo</span>
									</a>
								)}
							</div>

							<div className='projects__card-accent' />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
