import "../../pages/ProjectPage/ProjectPage.scss";
import { Mockups } from "../../utils/types";
import { brainstormDetails } from "../../utils/project-details";

export default function ProjectBrainStorm(): JSX.Element {
  const {
    title,
    position,
    responsibilities,
    date,
    mockups,
    techStack,
    problem,
  } = brainstormDetails;

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
    </section>
  );
}
