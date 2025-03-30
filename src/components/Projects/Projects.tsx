import { Link } from 'react-router-dom';
import './Projects.scss';
import brainstormiPhone from '../../assets/images/brainstorm-iphone.png';
import recleagueiPhone from '../../assets/images/recleague-iphone.png';

export default function Project2() {
	return (
		<section className='projects'>
			<div className='projects__container'>
				<h2 className='projects__title'>Featured Builds</h2>
				<div className='projects__grid'>
					<Link to='/projects/recleague' className='projects__link'>
						<article className='projects__card'>
							<h3 className='projects__card-title'>Rec League</h3>
							<p className='projects__card-desc'>
								A web/mobile app to find, register for, and manage recreational sports leagues in your
								area.
							</p>
							<button type='button' className='projects__card-btn'>
								View Project
							</button>
							<img src={recleagueiPhone} alt='Rec League App' className='projects__img' />
						</article>
					</Link>

					<Link to='/projects/brainstorm' className='projects__link'>
						<article className='projects__card'>
							<h3 className='projects__card-title'>BrainStorm</h3>
							<p className='projects__card-desc'>
								A mobile app for teams to suggest, brainstorm, and vote on ideas for projects.
							</p>
							<button type='button' className='projects__card-btn'>
								View Project
							</button>
							<img src={brainstormiPhone} alt='BrainStorm App' className='projects__img' />
						</article>
					</Link>
				</div>
			</div>
		</section>
	);
}
