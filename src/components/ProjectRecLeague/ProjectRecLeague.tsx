import React from "react";
import { v4 as uuidv4 } from "uuid";
import recleagueiPhone from "../../assets/images/recleague-iphone.png";
import recleagueAddUserIphone from "../../assets/images/recleague-adduser-iphone.png";
import recleagueProfileIphone from "../../assets/images/recleague-profile-iphone.png";
import ProjectHero from "../ProjectHero/ProjectHero";

export type Mockups = {
  id: string;
  src: string;
};

export interface RecLeagueDetails {
  title: string;
  position: string;
  responsibilities: string;
  date: string;
  mockups: Mockups[];
}

export default function ProjectRecLeague(): JSX.Element {
  const recleagueDetails: RecLeagueDetails = {
    title: "RecLeague",
    position: "Creator",
    responsibilities: "UI/UX, Development",
    date: "November 2022",
    mockups: [
      {
        id: uuidv4(),
        src: recleagueiPhone,
      },
      {
        id: uuidv4(),
        src: recleagueAddUserIphone,
      },
      {
        id: uuidv4(),
        src: recleagueProfileIphone,
      },
    ],
  };

  return (
    <section className="project">
      <ProjectHero recleagueDetails={recleagueDetails} />
    </section>
  );
}
