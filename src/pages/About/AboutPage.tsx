import type { Fact } from '../../components/FactList/FactList';
import { LabeledRow, LabeledRows } from '../../components/LabeledRows/LabeledRows';
import { PageAside } from '../../components/PageAside/PageAside';
import { SplitLayout } from '../../components/SplitLayout/SplitLayout';
import { aboutSections, links, profile } from '../../data/portfolio';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './AboutPage.scss';

const aboutFacts: Fact[] = [
	{ label: 'Based', value: 'Toronto, remote friendly' },
	{ label: 'Work', value: profile.role },
	{
		label: 'Also',
		value: (
			<a href={links.bluePhoenix} target='_blank' rel='noreferrer'>
				BluePhoenix Fitness ↗
			</a>
		),
	},
	{
		label: 'Resume',
		value: (
			<a href={links.resume} download>
				PDF ↓
			</a>
		),
	},
];

export function AboutPage(): JSX.Element {
	useDocumentTitle('About');

	return (
		<SplitLayout
			variant='page'
			aside={
				<PageAside
					eyebrow='About'
					title='Coach, then developer.'
					lede='The longer version of the story on the homepage.'
					facts={aboutFacts}
				/>
			}
		>
			<figure className='about-page__portrait'>
				<img src={profile.image} alt={profile.name} />
			</figure>

			<LabeledRows density='relaxed' hasBottomRule>
				{aboutSections.map((section) => (
					<LabeledRow label={section.label} isPivot={section.isPivot} key={section.label}>
						<p className={section.isQuote ? 'labeled-row__quote' : 'labeled-row__prose'}>{section.body}</p>
					</LabeledRow>
				))}
			</LabeledRows>
		</SplitLayout>
	);
}
