import './Home.scss';
import MainHero from '../../components/MainHero/MainHero';
import Projects from '../../components/Projects/Projects';

export default function HomePage(): JSX.Element {
	return (
		<section className='home-page'>
			<MainHero />
			<Projects />
		</section>
	);
}
