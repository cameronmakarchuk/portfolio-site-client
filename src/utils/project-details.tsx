import { ProjectDetails } from "./types";
import recleagueiPhone from "../assets/images/recleague-iphone.png";
import recleagueAddUserIphone from "../assets/images/recleague-adduser-iphone.png";
import recleagueProfileIphone from "../assets/images/recleague-profile-iphone.png";
import { v4 as uuidv4 } from "uuid";

export const recleagueDetails: ProjectDetails = {
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

export const brainstormDetails: ProjectDetails = {
  title: "BrainStorm",
  position: "Co-Creator, Co-Developer",
  responsibilities: "Development",
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
  problem: "Virtual idea-box/brainstorming application for teams.",
};
