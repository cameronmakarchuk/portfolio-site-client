import React from "react";
import { recleagueDetails } from "../../utils/project-details";
import { Mockups } from "../../utils/types";
import YouTubeEmbed from "../YouTubeEmbed/YouTubeEmbed";

export default function ProjectRecLeague(): JSX.Element {
  const recleagueVideoEmbedId: string = "tmo6_BDQmcc";
  const {
    title,
    position,
    responsibilities,
    date,
    mockups,
    techStack,
    problem,
  } = recleagueDetails;

  return (
    <section className="project">
      <h2 className="project__title">{title}</h2>
      <h3 className="project__subtitle">
        {`${position} | ${responsibilities} | ${date}`}
      </h3>
      <div className="project__img-container">
        {mockups.map((mockup: Mockups) => (
          <img
            key={mockup.id}
            src={mockup.src}
            alt="rec league iphone mockup"
            className="project__img-mockup"
          />
        ))}
      </div>
      <h3 className="project__subtitle project__tech-stack">
        {techStack.join(" ")}
      </h3>
      <h2 className="project__header">The Problem</h2>
      <p className="project__problem-description">{problem}</p>

      <h2 className="project__header">Watch The Demo</h2>
      <YouTubeEmbed embedId={recleagueVideoEmbedId} />
    </section>
  );
}
