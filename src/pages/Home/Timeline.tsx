import { Link } from 'react-router';
import { LabeledRow, LabeledRows } from '../../components/LabeledRows/LabeledRows';
import { MediaFrame, type MediaFrameSize } from '../../components/MediaFrame/MediaFrame';
import type { TimelineEntry } from '../../data/portfolio';
import { type Project, projectPath } from '../../data/projects';
import './Timeline.scss';

type TimelineProps = {
	entries: TimelineEntry[];
};

export function Timeline({ entries }: TimelineProps): JSX.Element {
	return (
		<LabeledRows density='compact' hasBottomRule>
			{entries.map((entry) => (
				<LabeledRow label={entry.year} isPivot={entry.kind === 'pivot'} key={`${entry.kind}-${entry.year}`}>
					<TimelineEntryContent entry={entry} />
				</LabeledRow>
			))}
		</LabeledRows>
	);
}

function TimelineEntryContent({ entry }: { entry: TimelineEntry }): JSX.Element {
	switch (entry.kind) {
		case 'projects': {
			const [firstProject, ...otherProjects] = entry.projects;

			if (firstProject && otherProjects.length === 0) {
				return <FeaturedProject project={firstProject} />;
			}

			return <ProjectCards projects={entry.projects} />;
		}

		case 'role':
			return (
				<div className='timeline-role'>
					<span className='timeline-role__title'>
						{entry.title}
						{entry.link && (
							<>
								{' → '}
								<a href={entry.link.href} target='_blank' rel='noreferrer'>
									{entry.link.label} ↗
								</a>
							</>
						)}
					</span>
					<p className='timeline-role__description'>{entry.description}</p>
				</div>
			);

		case 'pivot':
			return <p className='timeline-pivot'>{entry.text}</p>;
	}
}

function FeaturedProject({ project }: { project: Project }): JSX.Element {
	return (
		<article className='timeline-project'>
			<div className='timeline-project__heading'>
				<Link to={projectPath(project)} className='timeline-project__title'>
					{project.name} →
				</Link>
				<span className='timeline-project__status'>{project.status}</span>
			</div>
			<ProjectCoverLink project={project} size='feature' />
			<p className='timeline-project__summary'>{project.summary}</p>
		</article>
	);
}

function ProjectCards({ projects }: { projects: Project[] }): JSX.Element {
	return (
		<div className='timeline-cards'>
			{projects.map((project) => (
				<article className='timeline-card' key={project.slug}>
					<ProjectCoverLink project={project} size='card' />
					<Link to={projectPath(project)} className='timeline-project__title'>
						{project.name} →
					</Link>
					<p className='timeline-project__summary'>{project.summary}</p>
				</article>
			))}
		</div>
	);
}

// The project title already links to the same page, so the image link is skipped by keyboard and screen readers to
// avoid announcing the link twice; it's a larger click target for mouse and touch.
function ProjectCoverLink({ project, size }: { project: Project; size: MediaFrameSize }): JSX.Element {
	return (
		<Link to={projectPath(project)} className='timeline-project__cover-link' tabIndex={-1} aria-hidden='true'>
			<MediaFrame media={project.cover} size={size} />
		</Link>
	);
}
