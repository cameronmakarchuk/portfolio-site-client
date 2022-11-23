import React from "react";
import "./MainHero.scss";

export default function MainHero(): JSX.Element {
  return (
    <section className="main-hero">
      <h1 className="main-hero__title">
        Software developer, fitness entreprenuer, and travel enthusiast.
      </h1>
      <p className="main-hero__intro">
        Hi. I'm Cameron, a full-stack software developer and entreprenuer based
        in Toronto, Ontario, Canada. I spent 15 years in the fitness industry
        helping 1000's of people become the strongest, healthiest version of
        themselves. Now I'm leaning into my love of tech through software
        development.
      </p>
      {/* <div className="main-hero__social-icons">
        <img src="" alt="twitter icon" className="main-hero__social-icon" />
        <img src="" alt="instagram icon" className="main-hero__social-icon" />
        <img src="" alt="linkedin icon" className="main-hero__social-icon" />
        <img src="" alt="github icon" className="main-hero__social-icon" />
      </div> */}
    </section>
  );
}
