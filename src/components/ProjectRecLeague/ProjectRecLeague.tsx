import React from "react";
import recleagueiPhone from "../../assets/images/recleague-iphone.png";
import recleagueAddUserIphone from "../../assets/images/recleague-adduser-iphone.png";
import recleagueProfileIphone from "../../assets/images/recleague-profile-iphone.png";
import ProjectHero from "../ProjectHero/ProjectHero";

export interface RecLeagueDetails {
  title: string;
  position: string;
  responsibilities: string;
  date: string;
  mockups: string[];
}

export default function ProjectRecLeague(): JSX.Element {
  const recleagueDetails: RecLeagueDetails = {
    title: "RecLeague",
    position: "Creator",
    responsibilities: "UI/UX, Development",
    date: "November 2022",
    mockups: [recleagueiPhone, recleagueAddUserIphone, recleagueProfileIphone],
  };

  return (
    <section className="project">
      <ProjectHero recleagueDetails={recleagueDetails} />
    </section>
  );
}
