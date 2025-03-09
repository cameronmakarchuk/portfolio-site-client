import "./Header.scss";
import { useEffect, useState } from "react";
// import darkToggleIcon from "../../assets/icons/dark_mode_FILL0_wght400_GRAD0_opsz48.svg";
// import _lightToggleIcon from "../../assets/icons/light_mode_FILL0_wght400_GRAD0_opsz48.svg";
import { NavLink, useLocation } from "react-router-dom";

export default function PageHeader(): JSX.Element {
	const location = useLocation();
	const [active, setActive] = useState<string>(location.pathname);
	const [blur, setBlur] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setBlur(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="page-header">
			<nav className="page-header__nav">
				<ul
					className={
						blur
							? "page-header__nav-list page-header__nav-list--blur"
							: "page-header__nav-list"
					}
				>
					<NavLink
						to="/"
						className="page-header__nav-link"
						onClick={() => setActive("/")}
					>
						<li
							className={
								active === "/"
									? "page-header__nav-item page-header__nav-item--active"
									: "page-header__nav-item"
							}
						>
							Home
						</li>
					</NavLink>

					<NavLink
						to="/about"
						className="page-header__nav-link"
						onClick={() => setActive("/about")}
					>
						<li
							className={
								active === "/about"
									? "page-header__nav-item page-header__nav-item--active"
									: "page-header__nav-item"
							}
						>
							About
						</li>
					</NavLink>

					<NavLink
						to="/contact"
						className="page-header__nav-link"
						onClick={() => setActive("/contact")}
					>
						<li
							className={
								active === "/contact"
									? "page-header__nav-item page-header__nav-item--active"
									: "page-header__nav-item"
							}
						>
							Contact
						</li>
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
