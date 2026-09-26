import camProfileImage from '../assets/images/cam-profile-square.png';
import { brainStorm, type ExternalLink, homelab, type Project, petCareOs, portfolioSite, recLeague } from './projects';

export type NowItem = {
	label: string;
	text: string;
};

export type TimelineEntry =
	| { kind: 'projects'; year: string; projects: Project[] }
	| { kind: 'role'; year: string; title: string; description: string; link?: ExternalLink }
	| { kind: 'pivot'; year: string; text: string };

type AboutSection = {
	label: string;
	body: string;
	isPivot?: boolean;
	isQuote?: boolean;
};

export const profile = {
	name: 'Cameron Makarchuk',
	role: 'Backend developer, Lush',
	location: 'Toronto · remote friendly',
	image: camProfileImage,
};

export const links = {
	github: 'https://github.com/cameronmakarchuk',
	linkedin: 'https://linkedin.com/in/cameronmakarchuk',
	instagram: 'https://instagram.com/cameronmakarchuk',
	x: 'https://x.com/cmakarchuk',
	bluePhoenix: 'https://bluephoenixfitness.com',
	resume: '/cameron-makarchuk-resume-2026.pdf',
};

export const nowUpdatedLabel = 'Updated Sep 2026';

export const nowItems: [NowItem, ...NowItem[]] = [
	{ label: 'Building', text: 'A pet care business OS' },
	{ label: 'Tinkering', text: 'Self-hosting everything' },
	{ label: 'Training', text: 'Back in the gym' },
	{ label: 'Reading', text: 'Red Rising Saga' },
];

export const timelineEntries: TimelineEntry[] = [
	{ kind: 'projects', year: '2026', projects: [petCareOs] },
	{
		kind: 'role',
		year: '2025',
		title: 'Intermediate Backend Developer, Lush',
		description: 'Planning, building and maintaining the backend systems behind a global ecommerce site and app.',
	},
	{ kind: 'projects', year: '2024', projects: [homelab] },
	{ kind: 'projects', year: '2023', projects: [portfolioSite] },
	{
		kind: 'role',
		year: '2023',
		title: 'First dev job: Junior Backend Developer, Lush',
		description: 'Internal tools for order management, document translation and product subscriptions.',
	},
	{ kind: 'projects', year: '2022', projects: [recLeague, brainStorm] },
	{ kind: 'pivot', year: '2022', text: 'Age 38. Went all in on software.' },
	{
		kind: 'role',
		year: '2007–',
		title: 'Coaching',
		description:
			'Boom Bodyshaping Studio first, online since 2015. Clients, marketing, systems and delivery, all run myself.',
		link: { label: 'BluePhoenix Fitness', href: links.bluePhoenix },
	},
];

export const aboutSections: AboutSection[] = [
	{ label: 'Coaching', body: 'A paragraph on the studio years and building BluePhoenix online.' },
	{ label: 'At 38', body: 'A paragraph on why you switched and what the first year looked like.', isPivot: true },
	{ label: 'Now', body: 'A paragraph on the work at Lush and what you want next.' },
	{ label: 'Carried over', body: 'Show up, add a little weight each week, keep what works.', isQuote: true },
];
