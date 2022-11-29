import React from "react";
import CallToAction from "../../components/CallToAction/CallToAction";
import MainHero from "../../components/MainHero/MainHero";
import Projects from "../../components/Projects/Projects";
import TechStack from "../../components/TechStack/TechStack";

export default function HomePage(): JSX.Element {
  return (
    <section className="home-page">
      <MainHero />
      <TechStack />
      <Projects />
      <CallToAction />
    </section>
  );
}
