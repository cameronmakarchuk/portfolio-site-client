import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { profile } from '../../data/portfolio';
import { ContactPrompt } from '../ContactPrompt/ContactPrompt';
import { type Fact, FactList } from '../FactList/FactList';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import './PageAside.scss';

type PageAsideProps = {
	eyebrow: ReactNode;
	title: string;
	lede: string;
	facts: Fact[];
};

export function PageAside({ eyebrow, title, lede, facts }: PageAsideProps): JSX.Element {
	return (
		<>
			<div className='page-aside__top'>
				<Link to='/' className='page-aside__home'>
					<img className='page-aside__avatar' src={profile.image} alt='' />
					<span>← {profile.name}</span>
				</Link>

				<header className='page-aside__intro'>
					<div className='page-aside__eyebrow'>{eyebrow}</div>
					<h1 className='page-aside__title'>{title}</h1>
					<p className='page-aside__lede'>{lede}</p>
				</header>

				{facts.length > 0 && <FactList facts={facts} />}
			</div>

			<div className='page-aside__bottom'>
				<ContactPrompt size='regular' />
				<div className='page-aside__social'>
					<SocialLinks />
				</div>
			</div>
		</>
	);
}
