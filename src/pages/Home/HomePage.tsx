import { ContactPrompt } from '../../components/ContactPrompt/ContactPrompt';
import { SocialLinks } from '../../components/SocialLinks/SocialLinks';
import { SplitLayout } from '../../components/SplitLayout/SplitLayout';
import { links, nowItems, nowUpdatedLabel, profile, timelineEntries } from '../../data/portfolio';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { NowRotator } from './NowRotator';
import { Timeline } from './Timeline';
import './HomePage.scss';

export function HomePage(): JSX.Element {
	useDocumentTitle();

	return (
		<SplitLayout variant='home' aside={<HomeAside />}>
			<NowRotator items={nowItems} updatedLabel={nowUpdatedLabel} />
			<Timeline entries={timelineEntries} />
		</SplitLayout>
	);
}

function HomeAside(): JSX.Element {
	return (
		<>
			<div className='home-aside__top'>
				<div className='home-aside__profile'>
					<img className='home-aside__avatar' src={profile.image} alt={profile.name} />
					<div className='home-aside__identity'>
						<h1 className='home-aside__name'>{profile.name}</h1>
						<span className='home-aside__role'>{profile.role}</span>
					</div>
				</div>

				<div className='home-aside__bio'>
					<p>
						For fifteen years I coached people through physical change, first in a studio, then online. Most
						of the job turned out to be building systems people could actually stick with.
					</p>
					<p>
						At 38 I made a change of my own. I'd wanted to write software since I was a kid, so I went all
						in: a capstone, a hackathon, and in 2023 my first backend role at Lush.
					</p>
					<p className='home-aside__bio-aside'>
						I still run{' '}
						<a href={links.bluePhoenix} target='_blank' rel='noreferrer'>
							BluePhoenix Fitness
						</a>{' '}
						on the side. Everything else is in the log.
					</p>
				</div>
			</div>

			<div className='home-aside__bottom'>
				<ContactPrompt size='large' />
				<div className='home-aside__links'>
					<SocialLinks />
					<a className='home-aside__resume' href={links.resume} download>
						Resume (PDF) ↓
					</a>
				</div>
				<span className='home-aside__location'>{profile.location}</span>
			</div>
		</>
	);
}
