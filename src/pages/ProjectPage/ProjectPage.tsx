import "./ProjectPage.scss";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function ProjectPage(): JSX.Element {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="project-page">
			<div className="project-page__nav">
				<ul className="project-page__nav-list">
					<NavLink to="/projects/recleague" className="project-page__nav-link">
						<li className="project-page__nav-item">RecLeague</li>
					</NavLink>

					<NavLink to="/projects/brainstorm" className="project-page__nav-link">
						<li className="project-page__nav-item">BrainStorm</li>
					</NavLink>

					{/* <NavLink to="/projects/portfolio" className="project-page__nav-link">
            <li className="project-page__nav-item">CM Portfolio</li>
          </NavLink> */}
				</ul>
			</div>

			<Outlet />
		</section>
	);
}
