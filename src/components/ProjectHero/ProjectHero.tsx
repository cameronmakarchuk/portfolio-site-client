import { ProjectDetails, Mockups } from "../ProjectRecLeague/ProjectRecLeague";

interface ProjectHeroProps {
  recleagueDetails: ProjectDetails;
}

export default function ProjectHero({
  recleagueDetails,
}: ProjectHeroProps): JSX.Element {
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
    <>
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
      <h2 className="project__problem-header">The Problem</h2>
      <p className="project__problem-description">{problem}</p>
    </>
  );
}
