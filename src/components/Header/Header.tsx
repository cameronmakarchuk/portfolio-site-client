import "./Header.scss";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function PageHeader(): JSX.Element {
	const location = useLocation();
	const [active, setActive] = useState<string>(location.pathname);
	const [blur, setBlur] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // New state for menu toggle

	useEffect(() => {
		const handleScroll = () => {
			setBlur(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isMenuOpen) {
				setIsMenuOpen(false); // close menu if resizing to tablet/desktop
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [isMenuOpen]);

	// Toggle mobile menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="page-header">
			<nav className="page-header__nav">
				{/* Hamburger button */}
				<button
					type="button"
					className={`page-header__hamburger ${isMenuOpen ? "page-header__hamburger--open" : ""}`}
					onClick={toggleMenu}
					aria-label="Toggle menu"
					aria-expanded={isMenuOpen}
					aria-controls="nav-list"
				>
					<span className="page-header__hamburger-line" />
					<span className="page-header__hamburger-line" />
					<span className="page-header__hamburger-line" />
				</button>

				<ul
					id="nav-list"
					className={`page-header__nav-list ${
						blur ? "page-header__nav-list--blur" : ""
					} ${isMenuOpen ? "page-header__nav-list--open" : ""}`}
				>
					<NavLink
						to="/"
						className="page-header__nav-link"
						onClick={() => {
							setActive("/");
							setIsMenuOpen(false); // Close menu on link click
						}}
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
						onClick={() => {
							setActive("/about");
							setIsMenuOpen(false);
						}}
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
						onClick={() => {
							setActive("/contact");
							setIsMenuOpen(false);
						}}
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
		</header>
	);
}
