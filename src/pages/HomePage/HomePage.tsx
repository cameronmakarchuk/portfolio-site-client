import React from "react";
import MainHero from "../../components/MainHero/MainHero";
import TechStack from "../../components/TechStack/TechStack";

export default function HomePage(): JSX.Element {
  return (
    <section className="home-page">
      <MainHero />
      <TechStack />
    </section>
  );
}
