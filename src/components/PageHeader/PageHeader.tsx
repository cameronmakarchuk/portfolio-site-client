import "./PageHeader.scss";
import darkToggleIcon from "../../assets/icons/dark_mode_FILL0_wght400_GRAD0_opsz48.svg"
import lightToggleIcon from "../../assets/icons/light_mode_FILL0_wght400_GRAD0_opsz48.svg"
import {NavLink} from "react-router-dom";



export default function PageHeader(): JSX.Element {
    
    return (
        <header className="page-header">
            <nav className="page-header__nav">
                <ul className="page-header__nav-list">
                    <li className="page-header__nav-item">
                        <NavLink to="" className="page-header__nav-link">About</NavLink>
                    </li>
                    <li className="page-header__nav-item">
                        <NavLink to="" className="page-header__nav-link">Projects</NavLink>
                    </li>
                    <li className="page-header__nav-item">
                        <NavLink to="" className="page-header__nav-link">Contact</NavLink>
                    </li>
                </ul>

               <img src={darkToggleIcon} alt="light dark toggle" className="page-header__light-dark-toggle" />

            </nav>
        </header>
    )
}