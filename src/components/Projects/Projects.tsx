import React from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";
import recleagueiPhone from "../../assets/images/recleague-iphone.png";
import brainstormiPhone from "../../assets/images/brainstorm-iphone.png";

export default function Projects(): JSX.Element {
  return (
    <section className="projects">
      <Link to="" className="projects__link">
        <article className="projects__card">
          <h3 className="projects__card-subtitle">WEB APP</h3>
          <h2 className="projects__card-title">RecLeague</h2>

          <img
            src={recleagueiPhone}
            alt="rec league iphone mockup"
            className="projects__card-image"
          />
        </article>
      </Link>

      <Link to="" className="projects__link">
        <article className="projects__card">
          <h3 className="projects__card-subtitle">MOBILE</h3>
          <h2 className="projects__card-title">BrainStorm</h2>

          <img
            src={brainstormiPhone}
            alt="rec league iphone mockup"
            className="projects__card-image"
          />
        </article>
      </Link>

      <Link to="" className="projects__link">
        <article className="projects__card">
          <h3 className="projects__card-subtitle">WEB APP</h3>
          <h3 className="projects__card-subtitle">(this site!)</h3>
          <h2 className="projects__card-title">CM Portfolio</h2>

          <img
            src={brainstormiPhone}
            alt="rec league iphone mockup"
            className="projects__card-image"
          />
        </article>
      </Link>
    </section>
  );
}
