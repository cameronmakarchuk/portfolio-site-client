import './MainHero.scss';
import githubLogo from '../../assets/icons/github-logo.svg';
import instagramLogo from '../../assets/icons/instagram-logo.svg';
import linkedinLogo from '../../assets/icons/linkedin-logo.svg';
import twitterLogo from '../../assets/icons/twitter-logo.svg';
import camProfilePic from '../../assets/images/cam-profile-square.png';

export default function MainHero(): JSX.Element {
	return (
		<section className='main-hero'>
			<img
				src={camProfilePic}
				alt='Cameron profile'
				className='main-hero__profile-img'
			/>
			<div className='main-hero__profile-wrapper'>
				<h1 className='main-hero__title'>
					Software developer, fitness entreprenuer.
				</h1>
				<p className='main-hero__intro'>
					Hi. I'm Cameron, a full-stack software developer and entreprenuer
					based in Toronto, Ontario, Canada. I spent 15 years in the fitness
					industry helping 1000's of people become the strongest, healthiest
					version of themselves. Now I'm leaning into my love of tech through
					software development.
				</p>
				<div className='main-hero__social-icons'>
					<a
						href='https://twitter.com/cmakarchuk'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src={twitterLogo}
							alt='twitter icon'
							className='main-hero__social-icon'
						/>
					</a>
					<a
						href='https://instagram.com/cameronmakarchuk'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src={instagramLogo}
							alt='instagram icon'
							className='main-hero__social-icon'
						/>
					</a>
					<a
						href='https://linkedin.com/in/cameronmakarchuk'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src={linkedinLogo}
							alt='linkedin icon'
							className='main-hero__social-icon'
						/>
					</a>
					<a
						href='https://github.com/cameronmakarchuk'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src={githubLogo}
							alt='github icon'
							className='main-hero__social-icon'
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
