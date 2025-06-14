import './About.scss';
import cmSignature from '../../assets/icons/cm-signature-white.png';
import camProfilePic from '../../assets/images/cam-profile-square.png';

export default function AboutPage(): JSX.Element {
	return (
		<section className='about-page'>
			<h2 className='about-page__title'>From Sweat To Software: Life Rebooted</h2>

			<p className='about-page__description'>
				I’m Cameron, a former fitness pro who traded kettlebells for code. For 15 years, I ran a private
				personal training studio and built an online coaching platform with BluePhoenix Fitness, helping clients
				transform through hard work and dedication. But a childhood passion for coding—those late nights solving
				problems and building things on my computer—kept calling.
			</p>
			<p className='about-page__description'>
				As a kid, I’d lose myself in the thrill of building things with code, grinning ear-to-ear when a tricky
				problem finally clicked. That spark never faded, even as a fitness pro.
			</p>

			<p className='about-page__description'>
				In 2015, I shifted my fitness business online, diving deeper into the digital world through marketing
				and website tinkering. That pull toward tech was too strong to ignore, so in 2022, I made the leap to
				software development full-time. Now, I craft code with the same focus I once brought to training plans.
			</p>

			<p className='about-page__description'>
				When I’m not at my desk, I’m hiking, cycling, or traveling the world, collecting experiences and the
				occasional odd souvenir. This is my story—part grit, part geek, all me.
			</p>

			<div className='about-page__profile-card'>
				<img src={camProfilePic} alt='Cameron profile' className='about-page__profile-img' />

				<img src={cmSignature} alt='Cameron Makarchuk Signature' className='about-page__signature' />
			</div>
		</section>
	);
}
