import "./PageHeader.scss";
import {NavLink} from "react-router-dom";


// interface PageHeaderProps {
//     person: string;

// }

export default function PageHeader(): JSX.Element {
    
    return (
        <header className="page-header">
            <nav className="page-header__nav">
                <ul className="page-header__nav-list">
                    <li className="page-header__nav-item">
                        <NavLink to="">About</NavLink>
                    </li>
                    <li className="page-header__nav-item">
                        <NavLink to="">Projects</NavLink>
                    </li>
                    <li className="page-header__nav-item">
                        <NavLink to="">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}