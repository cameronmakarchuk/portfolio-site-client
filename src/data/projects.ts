import brainstormIdeaLoopImage from '../assets/images/brainstorm-idea-loop.webp';
import brainstormImage from '../assets/images/brainstorm-iphone.png';
import brainstormPointsImage from '../assets/images/brainstorm-points.webp';
import homelabImage from '../assets/images/homelab-laptop.webp';
import homelabServicesImage from '../assets/images/homelab-services.webp';
import homelabStackImage from '../assets/images/homelab-stack.webp';
import petCareAdminWebImage from '../assets/images/pet-care-admin-web.webp';
import petCareRequestFlowImage from '../assets/images/pet-care-request-flow.webp';
import petCareRolesImage from '../assets/images/pet-care-roles.webp';
import portfolioMobileCaseStudyImage from '../assets/images/portfolio-mobile-case-study.webp';
import portfolioMobileHomeImage from '../assets/images/portfolio-mobile-home.webp';
import portfolioSiteImage from '../assets/images/portfolio-site-laptop.webp';
import recLeagueArchitectureImage from '../assets/images/recleague-architecture.webp';
import recLeagueImage from '../assets/images/recleague-iphone.png';
import recLeagueSchemaImage from '../assets/images/recleague-schema.webp';

export type ImageMedia = { kind: 'image'; src: string; alt: string };

export type Media = ImageMedia | { kind: 'placeholder'; label: string };

export type ExternalLink = {
	label: string;
	href: string;
};

export type Project = {
	slug: string;
	name: string;
	year: string;
	status: string;
	summary: string;
	lede: string;
	cover: Media;
	coverCaption: string;
	role: string;
	stack: string[];
	timeline: string;
	links: ExternalLink[];
	problem: string;
	built: {
		summary: string;
		highlights: string[];
	};
	details: Media[];
	learned: string;
};

export const petCareOs: Project = {
	slug: 'pet-care-os',
	name: 'Pet Care Concierge (name tbd)',
	year: '2026',
	status: 'In progress',
	summary: 'A modern, intelligent pet care business operating system.',
	lede: 'The intelligent concierge for your pet care business.',
	cover: {
		kind: 'image',
		src: petCareRolesImage,
		alt: 'Three phones showing the client care plan review, the admin daily overview and the caregiver active visit screens',
	},
	coverCaption: 'Design mockups: client, admin and caregiver apps.',
	role: 'Solo, design to deploy',
	stack: ['TypeScript', 'React', 'Node.js', 'GraphQL', 'PostgreSQL'],
	timeline: 'In progress',
	links: [],
	problem:
		'Most options for running a pet care business are clunky and dated. Requests arrive as messages, schedules live in one tool and payments in another, so owners spend their day stitching it all together, chasing unassigned visits and failed payments, instead of looking after pets and their people.',
	built: {
		summary:
			'One system with a view for everyone involved. Clients ask for care in a simple conversation, then review and confirm a care plan with the caregiver, time, place and price laid out up front. The team gets a daily overview of what needs attention, builds each plan with a recommended caregiver, and handles messages and billing in one place. Caregivers get just what the visit needs. It is still in progress, and these design mockups are what the build is working toward.',
		highlights: [
			'Conversation-first requests that become confirmable care plans',
			'Caregiver recommendations based on availability, travel time and history with the pet',
			'Daily admin overview of visits, unassigned work, messages and invoices',
			'Caregiver visit mode with a timer, checklist, photos and protected client details',
			'Clients charged after the completed visit, with failed payments flagged for follow-up',
		],
	},
	details: [
		{
			kind: 'image',
			src: petCareAdminWebImage,
			alt: 'Admin web app in three browser windows: the daily overview, a request workspace with the caregiver schedule, and client messages',
		},
		{
			kind: 'image',
			src: petCareRequestFlowImage,
			alt: 'Request flow: the client asks, the team builds a care plan, the client confirms, the caregiver visits, and billing happens after the visit',
		},
	],
	learned: 'However long you think it will take, double it.',
};

export const homelab: Project = {
	slug: 'homelab',
	name: 'Homelab',
	year: '2024',
	status: 'Ongoing',
	summary: 'Self-hosted services, scripts and a Jellyfin media server. Building my own personal, private cloud.',
	lede: 'Self-hosted experiments, automation and infrastructure learning.',
	cover: {
		kind: 'image',
		src: homelabImage,
		alt: 'Homelab dashboard with system status, storage widgets and self-hosted app shortcuts, on a laptop',
	},
	coverCaption: 'The dashboard that ties the self-hosted services together.',
	role: 'Solo',
	stack: ['Linux', 'Networking', 'Automation', 'Proxmox'],
	timeline: 'Ongoing since 2024',
	links: [],
	problem:
		'I was getting tired of paying for more and more services, while giving away more and more of my data and control. Owning my data and my media started becoming more important to me. So I decided to start taking back control and use it as a learning platform.',
	built: {
		summary:
			"I'm currently rebuilding the homelab from the ground up. What started as a little Raspberry Pi in my closet, became a Dell OptiPlex tower with a 10th generation Intel i7 chip, 32 GB RAM, and 2 TB storage (so far). It's running a Proxmox Virtual Environment instance to manage everything. Right now there's just one virtual machine spun up to run Docker for all my service applications. So far I have a personal media server (Jellyfin), book/comic book platform (Kavita), 'Dropbox-style' cloud storage (Nextcloud), private photo storage/backup similar to Google Photos (Immich). All running on a server I control, with no subscription fees.",
		highlights: [
			'Proxmox VE on a Dell OptiPlex, with Docker running in a VM',
			'Jellyfin, Kavita, Nextcloud and Immich, all self-hosted',
			'Custom dashboard that ties every service together',
		],
	},
	details: [
		{
			kind: 'image',
			src: homelabStackImage,
			alt: 'Homelab stack: a Dell OptiPlex running Proxmox, with one Docker virtual machine hosting Jellyfin, Kavita, Nextcloud and Immich',
		},
		{
			kind: 'image',
			src: homelabServicesImage,
			alt: 'Self-hosted services and what they replace: Jellyfin for media, Kavita for reading, Nextcloud for files and Immich for photos',
		},
	],
	learned: "There is a lot to consider when self-hosting services, but it's also really fun to learn.",
};

export const portfolioSite: Project = {
	slug: 'portfolio-site',
	name: 'Portfolio site',
	year: '2023',
	status: 'Ongoing',
	summary: 'This site. Built in React and TypeScript, and rebuilt in 2026 as a logbook.',
	lede: 'The site you are reading: where the story, the projects and the contact form live.',
	cover: {
		kind: 'image',
		src: portfolioSiteImage,
		alt: 'Portfolio site home page with bio and timeline, on a laptop',
	},
	coverCaption: 'The 2026 redesign: the story on the left, the log on the right.',
	role: 'Solo, design to deploy',
	stack: ['React', 'TypeScript', 'Sass', 'Vite'],
	timeline: 'Since 2023, redesigned in 2026',
	links: [{ label: 'Code', href: 'https://github.com/cameronmakarchuk/portfolio-site-client' }],
	problem:
		'After my software engineering diploma I wanted to learn TypeScript, so I decided to use building my portfolio site as a way to do that while applying for jobs.',
	built: {
		summary:
			'A React and TypeScript single-page app built with Vite and Sass, now rebuilt as a logbook with every project and timeline entry kept in typed data files.',
		highlights: [
			'Timeline and case studies generated from typed data',
			'Split layout with a sidebar that pins on tall screens',
			'Contact form in a native dialog',
			'Lightbox for case study screenshots and diagrams',
			'Device mockups and diagrams generated by a Playwright script',
		],
	},
	details: [
		{
			kind: 'image',
			src: portfolioMobileHomeImage,
			alt: 'Portfolio home page on a phone, with the bio and contact prompt stacked above the timeline',
		},
		{
			kind: 'image',
			src: portfolioMobileCaseStudyImage,
			alt: 'RecLeague case study on a phone, showing the cover image and the Problem section',
		},
	],
	learned: 'What started as a way to learn TypeScript has evolved into a personal playground for new ideas.',
};

export const recLeague: Project = {
	slug: 'recleague',
	name: 'RecLeague',
	year: '2022',
	status: 'Capstone',
	summary: 'Capstone. Find, join and manage rec sports leagues near you.',
	lede: 'A web app that makes it easy to find, join and manage recreational sports leagues in your area.',
	cover: { kind: 'image', src: recLeagueImage, alt: 'RecLeague league detail page on iPhone' },
	coverCaption: 'League detail: location, dates, cost and members.',
	role: 'Solo, from planning to build',
	stack: ['JavaScript', 'React', 'Sass', 'Node.js', 'Express', 'MySQL'],
	timeline: '2 weeks, BrainStation',
	links: [
		{ label: 'Client code', href: 'https://github.com/cameronmakarchuk/recleague-client' },
		{ label: 'Server code', href: 'https://github.com/cameronmakarchuk/recleague-server' },
		{ label: 'Demo', href: 'https://www.youtube.com/watch?v=tmo6_BDQmcc' },
	],
	problem:
		'Rec leagues still run on email threads, spreadsheets and word of mouth. Finding one nearby, signing up and keeping track of who is playing takes more effort than it should.',
	built: {
		summary:
			'The capstone for my software engineering diploma at BrainStation, and my first project taken end to end. I planned it, designed the UI/UX and the database, built the Node server and API, then built a fully responsive React client on top.',
		highlights: [
			'Find and join leagues in your area',
			'Player and league-owner roles, each with its own permissions',
			'Relational MySQL schema, JWT login and Google Maps locations',
			'Fully responsive client, mobile first',
		],
	},
	details: [
		{
			kind: 'image',
			src: recLeagueSchemaImage,
			alt: 'Database diagram: users and leagues tables joined by a league_details table, with each league owned by a user',
		},
		{
			kind: 'image',
			src: recLeagueArchitectureImage,
			alt: 'Architecture diagram: React client calling an Express API with JWT auth, backed by MySQL, serving players and league owners',
		},
	],
	learned: 'Exactly how hot a laptop gets during an infinite loop bug.',
};

export const brainStorm: Project = {
	slug: 'brainstorm',
	name: 'BrainStorm',
	year: '2022',
	status: 'Hackathon',
	summary: 'A Reddit-style ideation app for teams, built in 24 hours at a Microsoft × BrainStation hackathon.',
	lede: 'A Reddit-style brainstorming app that helps teams share ideas, back the best ones and keep ideas flowing.',
	cover: { kind: 'image', src: brainstormImage, alt: 'BrainStorm app challenge dashboard on iPhone' },
	coverCaption: 'Challenge dashboard, mobile first.',
	role: 'Co-creator and developer on a small team',
	stack: ['JavaScript', 'React', 'Sass', 'Node.js', 'Express', 'MySQL'],
	timeline: '24 hours, Microsoft × BrainStation',
	links: [],
	problem:
		'Getting a team to generate ideas together, and agree on which ones are worth pursuing, is harder than it should be. With 24 hours on the clock at a hackathon hosted by BrainStation and Microsoft, my team set out to make it easier.',
	built: {
		summary:
			'We took our idea from a blank page to a working prototype in 24 hours and demoed it live for the judges. It works like Reddit for a team: anyone can post an idea, everyone can upvote, and the strongest ideas rise to the top.',
		highlights: [
			'Post ideas to a shared team board',
			'Upvote ideas so the best ones rise',
			'Earn points for posting and voting, redeemable for rewards',
		],
	},
	details: [
		{
			kind: 'image',
			src: brainstormIdeaLoopImage,
			alt: 'Idea flow: a weekly challenge, team members post ideas, upvotes surface the best, and the top idea becomes the next team activity',
		},
		{
			kind: 'image',
			src: brainstormPointsImage,
			alt: 'Points diagram: posting and upvoting ideas earns points that raise your level and can be redeemed for rewards',
		},
	],
	learned: 'A team with focus and a deadline can get a lot done.',
};

/** Case studies in timeline order, newest first. Previous/next navigation follows this order. */
export const projects: Project[] = [petCareOs, homelab, portfolioSite, recLeague, brainStorm];

export function findProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

export function findAdjacentProjects(project: Project): { previous?: Project; next?: Project } {
	const projectIndex = projects.indexOf(project);

	return {
		previous: projects[projectIndex - 1],
		next: projects[projectIndex + 1],
	};
}

export function projectPath(project: Project): string {
	return `/projects/${project.slug}`;
}
