import { ProjectDetails } from "./types";
import recleagueiPhone from "../assets/images/recleague-iphone.png";
import recleagueAddUserIphone from "../assets/images/recleague-adduser-iphone.png";
import recleagueProfileIphone from "../assets/images/recleague-profile-iphone.png";
import brainstormHome from "../assets/images/brainstorm-home.png";
import brainstormInput from "../assets/images/brainstorm-input.png";
import brainstormPrompts from "../assets/images/brainstorm-prompts.png";
import _brainstormSuccess from "../assets/images/brainstorm-success.png";
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
      src: brainstormHome,
    },
    {
      id: uuidv4(),
      src: brainstormInput,
    },
    {
      id: uuidv4(),
      src: brainstormPrompts,
    },
  ],
  problem:
    "As part of a 24-hour hackathon organized by Microsoft and BrainStation we were tasked with developing a solution to keep employees engaged while working from home, and feeling like their work mattered.",
};
