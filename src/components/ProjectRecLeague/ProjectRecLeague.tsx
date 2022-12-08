import React from "react";
import { v4 as uuidv4 } from "uuid";
import recleagueiPhone from "../../assets/images/recleague-iphone.png";
import recleagueAddUserIphone from "../../assets/images/recleague-adduser-iphone.png";
import recleagueProfileIphone from "../../assets/images/recleague-profile-iphone.png";
import ProjectHero from "../ProjectHero/ProjectHero";
import YouTubeEmbed from "../YouTubeEmbed/YouTubeEmbed";

export type Mockups = {
  id: string;
  src: string;
};

export interface ProjectDetails {
  title: string;
  position: string;
  responsibilities: string;
  date: string;
  mockups: Mockups[];
  techStack: string[];
  problem: string;
}

export default function ProjectRecLeague(): JSX.Element {
  const recleagueDetails: ProjectDetails = {
    title: "RecLeague",
    position: "Creator",
    responsibilities: "UI/UX, Development",
    date: "November 2022",
    techStack: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "React",
      "Axios",
      "Node.js",
      "Express.js",
      "Knex.js",
      "SQL/mySQL",
      "JWT",
    ],
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
    problem:
      "Most recreational sports leagues are difficult to find, have websites that are challenging to navigate, and joining is a pain - especially when you're new in town.",
  };

  const recleagueVideoEmbedId: string = "tmo6_BDQmcc";

  return (
    <section className="project">
      <ProjectHero recleagueDetails={recleagueDetails} />
      <YouTubeEmbed embedId={recleagueVideoEmbedId} />
    </section>
  );
}
