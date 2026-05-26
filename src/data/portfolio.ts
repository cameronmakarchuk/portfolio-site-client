import brainstormImage from "../assets/images/brainstorm-iphone.png";
import camProfileImage from "../assets/images/cam-profile-square.png";
import homelabImage from "../assets/images/homelab-placeholder.png";
import recLeagueImage from "../assets/images/recleague-iphone.png";

export type Accent = "cyan" | "magenta" | "lime" | "amber" | "coral" | "teal";

export type JourneyEvent = {
	year: string;
	title: string;
	description: string;
	accent: Accent;
	isPivot?: boolean;
	isNow?: boolean;
};

export type FeaturedBuild = {
	id: string;
	name: string;
	status: string;
	year: string;
	summary: string;
	description: string;
	stack: string[];
	image: string;
	imageAlt: string;
	accent: Accent;
};

export type ExperienceItem = {
	role: string;
	org: string;
	period: string;
	description: string;
};

export const profile = {
	name: "Cameron Makarchuk",
	title: "Software Developer",
	location: "Canada - remote friendly",
	tagline: "Developer, builder, & learning addict",
	subtitle: "Now I build products with an operator's instincts and a beginner's appetite for hard problems.",
	description:
		"I spent fifteen years coaching people through physical change before making my own career change into software at 38. This site is the logbook: the pivot, the projects, the experiments, and the work I am growing into next.",
	image: camProfileImage,
};

export const navItems = [
	{ label: "Journey", href: "#journey" },
	{ label: "Builds", href: "#projects" },
	{ label: "Experience", href: "#experience" },
	{ label: "Contact", href: "#contact" },
];

export const stats = [
	{ value: "15", label: "Years coaching", accent: "cyan" },
	{ value: "38", label: "Age at pivot", accent: "magenta" },
	{ value: "03", label: "Featured builds", accent: "lime" },
	{ value: "01", label: "Career in motion", accent: "amber" },
] satisfies Array<{ value: string; label: string; accent: Accent }>;

export const journeyEvents: JourneyEvent[] = [
	{
		year: "2009",
		title: "Started coaching full time",
		description:
			"Built a fitness career from the ground up, learning how to sell, teach, listen, and keep showing up when the plan changed.",
		accent: "cyan",
	},
	{
		year: "2015",
		title: "BluePhoenix moved online",
		description:
			"Started turning coaching systems into digital workflows, content, automations, and client tools.",
		accent: "teal",
	},
	{
		year: "2022",
		title: "The pivot at 38",
		description:
			"Committed to software development full time and rebuilt my work life around code, curiosity, and the discipline I already trusted.",
		accent: "magenta",
		isPivot: true,
	},
	{
		year: "2023",
		title: "Learning in public",
		description:
			"Focused on JavaScript, TypeScript, React, Node, databases, real projects, and the quiet grind of getting a little better every week.",
		accent: "amber",
	},
	{
		year: "Now",
		title: "Building useful things",
		description:
			"Growing through project work, experiments, and product thinking - looking for teams and problems where ownership matters.",
		accent: "lime",
		isNow: true,
	},
];

export const featuredBuilds: FeaturedBuild[] = [
	{
		id: "01",
		name: "RecLeague",
		status: "Case study",
		year: "2022",
		summary: "Find and register for adult recreational sports leagues.",
		description:
			"A full-stack league discovery and registration concept that helped turn early React, Sass, Node, Express, and MySQL practice into a real product flow.",
		stack: ["React", "Sass", "Node", "Express", "MySQL"],
		image: recLeagueImage,
		imageAlt: "RecLeague mobile app league detail screen",
		accent: "amber",
	},
	{
		id: "02",
		name: "BrainStorm",
		status: "Hackathon",
		year: "2022",
		summary: "A team ideation app for prompts, voting, and rewards.",
		description:
			"Built during a 24-hour hackathon with a small team, focused on turning messy collaboration into a guided mobile-first workflow.",
		stack: ["React", "JavaScript", "Node", "Express"],
		image: brainstormImage,
		imageAlt: "BrainStorm mobile app challenge dashboard",
		accent: "magenta",
	},
	{
		id: "03",
		name: "Homelab",
		status: "Placeholder",
		year: "Ongoing",
		summary: "Self-hosted experiments, automation, and infrastructure learning.",
		description:
			"A working placeholder for the experiments section: local services, scripts, tooling experiments, and the kind of tinkering that keeps the learning loop alive.",
		stack: ["Linux", "Networking", "Automation", "Self-hosting"],
		image: homelabImage,
		imageAlt: "Cyberpunk homelab dashboard placeholder",
		accent: "cyan",
	},
];

export const experienceItems: ExperienceItem[] = [
	{
		role: "Software Developer",
		org: "Project and freelance work",
		period: "2022 - Present",
		description:
			"Frontend-heavy product development with React, TypeScript, Sass, API integration, and full-stack fundamentals.",
	},
	{
		role: "Founder / Coach",
		org: "BluePhoenix Fitness",
		period: "2009 - Present",
		description:
			"Built and operated a coaching business, managed clients, systems, marketing, and online delivery.",
	},
	{
		role: "Career Transition",
		org: "Software development",
		period: "Age 38 onward",
		description:
			"Retrained through practical projects, modern web tooling, and steady iteration from first principles.",
	},
];

export const skills = [
	"TypeScript",
	"React",
	"JavaScript",
	"Node.js",
	"Express",
	"Sass",
	"SQL",
	"Git",
	"APIs",
	"Product thinking",
];

export const links = {
	email: "mailto:cmakarchuk@gmail.com",
	github: "https://github.com/cameronmakarchuk",
	linkedin: "https://linkedin.com/in/cameronmakarchuk",
	instagram: "https://instagram.com/cameronmakarchuk",
	bluePhoenix: "https://bluephoenixfitness.com",
};
