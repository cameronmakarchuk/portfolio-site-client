import './PageHeader.scss';
// import darkToggleIcon from "../../assets/icons/dark_mode_FILL0_wght400_GRAD0_opsz48.svg";
// import _lightToggleIcon from "../../assets/icons/light_mode_FILL0_wght400_GRAD0_opsz48.svg";
import { NavLink } from 'react-router-dom';
import cmSignature from '../../assets/icons/cm-signature-black.svg';

export default function PageHeader(): JSX.Element {
	return (
		<header className='page-header'>
			<NavLink to='/' className='page-header__nav-link'>
				<img
					src={cmSignature}
					alt='Cameron Makarchuk Signature'
					className='page-header__logo'
				/>
			</NavLink>
			<nav className='page-header__nav'>
				<ul className='page-header__nav-list'>
					<NavLink to='/' className='page-header__nav-link'>
						<li className='page-header__nav-item'>Home</li>
					</NavLink>

					<NavLink to='/about' className='page-header__nav-link'>
						<li className='page-header__nav-item'>About</li>
					</NavLink>

					<NavLink to='/contact' className='page-header__nav-link'>
						<li className='page-header__nav-item'>Contact</li>
					</NavLink>
				</ul>
			</nav>
			{/* <img
        src={darkToggleIcon}
        alt="light dark toggle"
        className="page-header__light-dark-toggle"
      /> */}
		</header>
	);
}
