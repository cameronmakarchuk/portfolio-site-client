import brainstormImage from '../assets/images/brainstorm-iphone.png';
import camProfileImage from '../assets/images/cam-profile-square.png';
import homelabImage from '../assets/images/homelab-placeholder.png';
import recLeagueImage from '../assets/images/recleague-iphone.png';

export type Accent = 'cyan' | 'lime' | 'amber' | 'coral';

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
	details: {
		problem: string;
		built: string;
		learned: string;
	};
	stack: string[];
	image: string;
	imageAlt: string;
	accent: Accent;
};

export type FocusItem = {
	label: string;
	title: string;
	description: string;
	accent: Accent;
};

export type ExperienceItem = {
	role: string;
	org: string;
	period: string;
	description: string;
};

export const profile = {
	name: 'Cameron Makarchuk',
	title: 'Software Developer',
	location: 'Toronto, Canada - remote friendly',
	description:
		'I spent fifteen years coaching people through physical change before making my own career change into software at 38. This site is the logbook: the pivot, the projects, the experiments, and the work I am growing into next.',
	image: camProfileImage,
};

export const navItems = [
	{ label: 'Focus', href: '#focus' },
	{ label: 'Journey', href: '#journey' },
	{ label: 'Builds', href: '#projects' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Contact', href: '#contact' },
];

export const stats = [
	{ value: '15+', label: 'Years coaching', accent: 'cyan' },
	{ value: '38', label: 'Age at pivot', accent: 'coral' },
	{ value: '03+', label: 'Years building software', accent: 'lime' },
	{ value: '03', label: 'Featured builds', accent: 'amber' },
] satisfies Array<{ value: string; label: string; accent: Accent }>;

export const focusItems: FocusItem[] = [
	{
		label: 'Building',
		title: 'Portfolio polish, homelab systems, and practical product ideas.',
		description:
			'Keeping the loop tight between frontend craft, backend architecture, automation, and the projects that make those skills concrete.',
		accent: 'cyan',
	},
	{
		label: 'Learning',
		title: 'AI agents, infrastructure habits, and deeper TypeScript patterns.',
		description:
			'Exploring tools that make small teams faster while staying grounded in clear systems, readable code, and useful outcomes.',
		accent: 'coral',
	},
	{
		label: 'Open to',
		title: 'Backend, full-stack, and product-minded engineering work.',
		description:
			'Especially teams that care about ownership, communication, customer impact, and building software people can trust.',
		accent: 'lime',
	},
];

export const journeyEvents: JourneyEvent[] = [
	{
		year: '2007',
		title: 'Started coaching full time',
		description:
			'Built a fitness career from the ground up, learning how to sell, teach, listen, and help people transform their lives.',
		accent: 'cyan',
	},
	{
		year: '2015',
		title: 'BluePhoenix Fitness moved online',
		description: 'Started turning coaching systems into digital workflows, content, automations, and client tools.',
		accent: 'lime',
	},
	{
		year: '2022',
		title: 'Career change at 38',
		description:
			'Committed to software development full time and rebuilt my work life around code, curiosity, and the discipline I already trusted.',
		accent: 'coral',
		isPivot: true,
	},
	{
		year: '2023',
		title: 'First job as a backend software developer',
		description:
			'Building and maintaining production-level backend systems for a global retail and ecommerce brand.',
		accent: 'amber',
	},
	{
		year: 'Now',
		title: 'Constant, continuous growth & deep learning',
		description: 'Always learning, always growing through project work, experiments, and product thinking.',
		accent: 'lime',
		isNow: true,
	},
];

export const featuredBuilds: FeaturedBuild[] = [
	{
		id: '01',
		name: 'RecLeague',
		status: 'Capstone Project',
		year: '2022',
		summary: 'Find and register for adult recreational sports leagues.',
		description:
			'A full-stack league discovery and registration concept that helped turn early React, Sass, Node, Express, and MySQL practice into a real product flow.',
		details: {
			problem:
				'Adult rec sports discovery and league registration can be scattered across disconnected sites and manual workflows.',
			built: 'A mobile-first product flow for browsing leagues, viewing details, managing profiles, and registering for play.',
			learned:
				'How frontend state, API contracts, relational data, and product clarity all have to move together.',
		},
		stack: ['React', 'Sass', 'Node', 'Express', 'MySQL'],
		image: recLeagueImage,
		imageAlt: 'RecLeague mobile app league detail screen',
		accent: 'amber',
	},
	{
		id: '02',
		name: 'BrainStorm',
		status: 'Hackathon',
		year: '2022',
		summary: 'A team ideation app with prompts, voting, and rewards.',
		description:
			'Built during a 24-hour hackathon - hosted by Microsoft & Brainstation - with a small team, focused on turning messy collaboration into a guided mobile-first workflow.',
		details: {
			problem:
				'Creative teams can lose momentum when brainstorming has no structure, voting, or shared sense of progress.',
			built: 'A prompt-led ideation flow with challenge screens, idea submission, voting, and reward moments.',
			learned:
				'How to scope under pressure, communicate with a team, and protect the core user flow when time is tight.',
		},
		stack: ['React', 'JavaScript', 'Node', 'Express'],
		image: brainstormImage,
		imageAlt: 'BrainStorm mobile app challenge dashboard',
		accent: 'coral',
	},
	{
		id: '03',
		name: 'Homelab',
		status: 'Personal',
		year: 'Ongoing',
		summary: 'Self-hosted experiments, automation, and infrastructure learning.',
		description:
			'My personal experimentation with self-hosting local services, scripts, tooling, and the kind of tinkering that keeps the learning loop alive.',
		details: {
			problem:
				'Modern software work benefits from understanding the systems underneath the app, not just the app surface.',
			built: 'A small lab environment for services, networking, automation scripts, backups, and infrastructure practice.',
			learned:
				'How operational thinking sharpens debugging, deployment decisions, and respect for simple reliable systems.',
		},
		stack: ['Linux', 'Networking', 'Automation', 'Self-hosting'],
		image: homelabImage,
		imageAlt: 'Homelab dashboard placeholder',
		accent: 'cyan',
	},
];

export const experienceItems: ExperienceItem[] = [
	{
		role: 'Intermediate Backend Software Developer',
		org: 'Lush',
		period: '2025 - Present',
		description:
			'Planning, building, and maintaining backend systems that power the website/app for a global ecommerce company.',
	},
	{
		role: 'Junior Backend Software Developer',
		org: 'Lush',
		period: '2023 - 2025',
		description:
			'Involved in the development and maintenance of internal tools used for order management systems, document translation, and product subscriptions.',
	},
	{
		role: 'Founder / Coach',
		org: 'Boom Bodyshaping Studio / BluePhoenix Fitness',
		period: '2007 - Present',
		description:
			'Built and operated a coaching business, managed clients, systems, marketing, and online delivery.',
	},
	{
		role: 'Career Transition',
		org: 'Software development',
		period: 'Age 38 onward',
		description: "Decided at 38 to take a hard left turn and finally follow a passion I'd had since I was a kid.",
	},
];

export const skills = [
	'JavaScript',
	'TypeScript',
	'React',
	'CSS',
	'Sass',
	'Node.js',
	'Express',
	'GraphQL',
	'SQL',
	'Git',
	'APIs',
	'Linux',
	'A.I. Agents',
];

export const links = {
	email: 'mailto:cameron@bluephoenixfitness.com',
	resume: '/cameron-makarchuk-resume.txt',
	github: 'https://github.com/cameronmakarchuk',
	linkedin: 'https://linkedin.com/in/cameronmakarchuk',
	instagram: 'https://instagram.com/cameronmakarchuk',
	x: 'https://x.com/cmakarchuk',
	bluePhoenix: 'https://bluephoenixfitness.com',
};
