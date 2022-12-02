import { RecLeagueDetails } from "../ProjectRecLeague/ProjectRecLeague";

interface ProjectHeroProps {
  recleagueDetails: RecLeagueDetails;
}

export default function ProjectHero({
  recleagueDetails,
}: ProjectHeroProps): JSX.Element {
  const { title, position, responsibilities, date, mockups } = recleagueDetails;
  return (
    <>
      <h2 className="project__title">{title}</h2>
      <h3 className="project__subtitle">
        {`${position} | ${responsibilities} | ${date}`}
      </h3>
      <div className="project__img-container">
        {mockups.map((mockup: string) => (
          <img
            src={mockup}
            alt="rec league iphone mockup"
            className="project__img-mockup"
          />
        ))}
      </div>
    </>
  );
}
