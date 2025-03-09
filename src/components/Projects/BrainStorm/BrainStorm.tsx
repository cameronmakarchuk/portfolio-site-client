import "../../../pages/Projects/Projects.scss";
import { brainstormDetails } from "../../../utils/project-details";
import type { Mockups } from "../../../utils/types";

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

			<h2 className="project__header">Our Solution</h2>
			<p className="project__problem-description">
				In 24-hours we came together as a group to research, plan, design, and
				develop "BrainStorm" - a virtual suggestion box that rewards team
				members for engagement.
			</p>
			<p className="project__problem-description">
				Team leaders can add "Prompts" for ideas or suggestions. Then team
				members can post their ideas and vote on other ideas. Each time a team
				member participates by posting an idea or voting on an idea they're
				rewarded with points.
			</p>
			<p className="project__problem-description">
				The idea with the most votes rises to the top of the list, and whichever
				idea gets the most votes could be selected.
			</p>
			<p className="project__problem-description">
				BrainStorm provides a way for more introverted team members to
				participate in brainstorming sessions in a less intimidating way, while
				feeling like their ideas matter and they're contributing.
			</p>
			<p className="project__problem-description">
				Points can then be redeemed for whatever the team decides upon.
			</p>
		</section>
	);
}
