import React from "react";
import "./HomePage.scss";
import MainHero from "../../components/MainHero/MainHero";
import Projects from "../../components/Projects/Projects";
import TechStack from "../../components/TechStack/TechStack";

export default function HomePage(): JSX.Element {
  return (
    <section className="home-page">
      <MainHero />
      <TechStack />
      <Projects />
    </section>
  );
}
