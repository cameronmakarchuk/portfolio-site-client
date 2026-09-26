import { Link, useParams } from 'react-router';
import type { Fact } from '../../components/FactList/FactList';
import { ImageLightbox } from '../../components/ImageLightbox/ImageLightbox';
import { LabeledRow, LabeledRows } from '../../components/LabeledRows/LabeledRows';
import { MediaFrame } from '../../components/MediaFrame/MediaFrame';
import { PageAside } from '../../components/PageAside/PageAside';
import { SplitLayout } from '../../components/SplitLayout/SplitLayout';
import { findAdjacentProjects, findProjectBySlug, type Project, projectPath } from '../../data/projects';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { NotFoundPage } from '../NotFound/NotFoundPage';
import './ProjectPage.scss';

export function ProjectPage(): JSX.Element {
	const { slug } = useParams();
	const project = slug ? findProjectBySlug(slug) : undefined;

	if (!project) {
		return <NotFoundPage />;
	}

	return <ProjectCaseStudy project={project} />;
}

function ProjectCaseStudy({ project }: { project: Project }): JSX.Element {
	useDocumentTitle(project.name);

	return (
		<SplitLayout variant='page' aside={<ProjectAside project={project} />}>
			<figure className='project-page__cover'>
				{project.cover.kind === 'image' ? (
					<ImageLightbox image={project.cover} size='hero' />
				) : (
					<MediaFrame media={project.cover} size='hero' />
				)}
				<figcaption className='project-page__caption'>{project.coverCaption}</figcaption>
			</figure>

			<LabeledRows density='relaxed'>
				<LabeledRow label='Problem'>
					<p className='labeled-row__prose'>{project.problem}</p>
				</LabeledRow>
				<LabeledRow label='Built'>
					<div className='project-page__built'>
						<p className='labeled-row__prose'>{project.built.summary}</p>
						<ul className='project-page__highlights'>
							{project.built.highlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					</div>
				</LabeledRow>
				<LabeledRow label='Detail'>
					<div className='project-page__details'>
						{project.details.map((detail) =>
							detail.kind === 'image' ? (
								<ImageLightbox image={detail} size='detail' key={detail.src} />
							) : (
								<MediaFrame media={detail} size='detail' key={detail.label} />
							),
						)}
					</div>
				</LabeledRow>
				<LabeledRow label='Learned'>
					<p className='labeled-row__quote'>{project.learned}</p>
				</LabeledRow>
			</LabeledRows>

			<ProjectPager project={project} />
		</SplitLayout>
	);
}

function ProjectAside({ project }: { project: Project }): JSX.Element {
	const facts: Fact[] = [
		{ label: 'Role', value: project.role },
		{ label: 'Stack', value: project.stack.join(' · ') },
		{ label: 'Timeline', value: project.timeline },
	];

	if (project.links.length > 0) {
		facts.push({
			label: 'Links',
			value: project.links.map((link) => (
				<a href={link.href} target='_blank' rel='noreferrer' key={link.href}>
					{link.label} ↗
				</a>
			)),
		});
	}

	return (
		<PageAside
			eyebrow={
				<>
					<span>{project.year}</span>
					<span className='project-page__status'>{project.status}</span>
				</>
			}
			title={project.name}
			lede={project.lede}
			facts={facts}
		/>
	);
}

function ProjectPager({ project }: { project: Project }): JSX.Element {
	const { previous, next } = findAdjacentProjects(project);

	return (
		<nav className='project-pager' aria-label='More projects'>
			{previous ? (
				<Link to={projectPath(previous)} className='project-pager__link project-pager__link--previous'>
					<span className='project-pager__meta'>← Previous · {previous.year}</span>
					<span className='project-pager__name'>{previous.name}</span>
				</Link>
			) : (
				<span className='project-pager__link project-pager__link--previous' />
			)}
			{next && (
				<Link to={projectPath(next)} className='project-pager__link project-pager__link--next'>
					<span className='project-pager__meta'>Next · {next.year} →</span>
					<span className='project-pager__name'>{next.name}</span>
				</Link>
			)}
		</nav>
	);
}
