import "./ProjectPage.scss";
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import CallToAction from "../../components/CallToAction/CallToAction";

export default function ProjectPage(): JSX.Element {
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

          <NavLink to="/projects/portfolio" className="project-page__nav-link">
            <li className="project-page__nav-item">CM Portfolio</li>
          </NavLink>
        </ul>
      </div>

      <Outlet />
      <CallToAction />
    </section>
  );
}
