import "./Portfolio.scss";
import {
	experienceItems,
	featuredBuilds,
	journeyEvents,
	links,
	navItems,
	profile,
	skills,
	stats,
	type Accent,
} from "../../data/portfolio";

const accentClass = (accent: Accent) => `portfolio-accent--${accent}`;

export default function PortfolioPage(): JSX.Element {
	return (
		<div className="portfolio-shell">
			<SiteNav />
			<main>
				<HeroSection />
				<StackTicker />
				<JourneySection />
				<ProjectsSection />
				<ExperienceSection />
				<ContactSection />
			</main>
		</div>
	);
}

function SiteNav(): JSX.Element {
	return (
		<header className="portfolio-nav">
			<a href="#home" className="portfolio-nav__brand" aria-label="Cameron Makarchuk home">
				<span className="portfolio-nav__mark">C</span>
				<span>
					<span className="portfolio-nav__name">~/code/portfolio</span>
					<span className="portfolio-nav__meta">developer - node.0xCM</span>
				</span>
			</a>
			<nav className="portfolio-nav__links" aria-label="Primary navigation">
				{navItems.map((item, index) => (
					<a href={item.href} className="portfolio-nav__link" key={item.href}>
						<span>{String(index).padStart(2, "0")}</span>
						{item.label}
					</a>
				))}
			</nav>
			<a href={links.linkedin} className="portfolio-nav__cta" target="_blank" rel="noreferrer">
				Connect
			</a>
		</header>
	);
}

function HeroSection(): JSX.Element {
	return (
		<section className="portfolio-hero portfolio-section" id="home">
			<div className="portfolio-section__inner portfolio-hero__grid">
				<div className="portfolio-hero__content">
					<p className="portfolio-kicker">
						<span className="portfolio-kicker__dot" />
						System ready - developer journey online
					</p>
					<h1 className="portfolio-hero__title">
						<span>Developer, builder & </span>
						<span>
							constantly <em>improving</em> 
						</span>
					</h1>
					<p className="portfolio-hero__description">{profile.description}</p>
					<div className="portfolio-hero__actions" aria-label="Primary actions">
						<a href="#projects" className="portfolio-button portfolio-button--primary">
							View builds
						</a>
						<a href="#journey" className="portfolio-button portfolio-button--ghost">
							Read the journey
						</a>
					</div>
				</div>

				<aside className="portfolio-hero__profile-card" aria-label={`${profile.name} profile summary`}>
					<div className="portfolio-hero__portrait-frame">
						<img src={profile.image} alt="Cameron Makarchuk" className="portfolio-hero__portrait" />
						<div className="portfolio-hero__portrait-hud" aria-hidden="true">
							<span>REC - 4K</span>
							<span>ID - 0xCM</span>
						</div>
					</div>
					<div className="portfolio-hero__profile-copy">
						<p className="portfolio-label">// Profile</p>
						<h2>{profile.name}</h2>
						<p>{profile.title}</p>
						<span>{profile.location}</span>
					</div>
				</aside>

				<div className="portfolio-hero__stats">
					{stats.map((stat) => (
						<article className={`portfolio-stat ${accentClass(stat.accent)}`} key={stat.label}>
							<strong>{stat.value}</strong>
							<span>{stat.label}</span>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function StackTicker(): JSX.Element {
	const tickerItems = ["TypeScript", "React", "Node", "Sass", "APIs", "Product thinking", "Career change at 38"];
	const repeatedItems = [...tickerItems, ...tickerItems];

	return (
		<div className="portfolio-ticker" aria-hidden="true">
			<div className="portfolio-ticker__track">
				{repeatedItems.map((item, index) => (
					<span key={`${item}-${index}`}>{item}</span>
				))}
			</div>
		</div>
	);
}

function JourneySection(): JSX.Element {
	return (
		<section className="portfolio-section portfolio-section--bordered" id="journey">
			<div className="portfolio-section__inner">
				<SectionHeading
					kicker="01 - The journey"
					title={
						<>
							From coach to <em>builder</em>
						</>
					}
					meta="2009 - present"
				/>
				<div className="portfolio-journey">
					{journeyEvents.map((event) => (
						<article
							className={`portfolio-journey__event ${accentClass(event.accent)} ${
								event.isPivot ? "portfolio-journey__event--pivot" : ""
							} ${event.isNow ? "portfolio-journey__event--now" : ""}`}
							key={`${event.year}-${event.title}`}
						>
							<span className="portfolio-journey__year">{event.year}</span>
							<span className="portfolio-journey__node" aria-hidden="true" />
							<div className="portfolio-card portfolio-journey__card">
								<div className="portfolio-journey__title-row">
									<h3>{event.title}</h3>
									{event.isPivot && <span>Pivot point</span>}
									{event.isNow && <span>Here / now</span>}
								</div>
								<p>{event.description}</p>
							</div>
						</article>
					))}
				</div>
				<BluePhoenixCallout />
			</div>
		</section>
	);
}

function BluePhoenixCallout(): JSX.Element {
	return (
		<aside className="portfolio-card portfolio-bluephoenix">
			<div>
				<p className="portfolio-label">Previous chapter - still part of the story</p>
				<h3>BluePhoenix Fitness</h3>
				<p>
					The coaching business that shaped how I think about systems, trust, consistency, and helping
					people move through hard transitions.
				</p>
			</div>
			<a href={links.bluePhoenix} target="_blank" rel="noreferrer" className="portfolio-button portfolio-button--ghost">
				Visit site
			</a>
		</aside>
	);
}

function ProjectsSection(): JSX.Element {
	return (
		<section className="portfolio-section" id="projects">
			<div className="portfolio-section__inner">
				<SectionHeading
					kicker="02 - Featured builds"
					title={
						<>
							Projects, experiments, and things I am <em>building</em>
						</>
					}
					meta="case studies + projects"
				/>
				<div className="portfolio-projects">
					{featuredBuilds.map((project) => (
						<article className={`portfolio-project portfolio-card ${accentClass(project.accent)}`} key={project.name}>
							<div className="portfolio-project__media">
								<img src={project.image} alt={project.imageAlt} />
							</div>
							<div className="portfolio-project__content">
								<p className="portfolio-label">
									// {project.id} - {project.year}
								</p>
								<div className="portfolio-project__title-row">
									<h3>{project.name}</h3>
									<span>{project.status}</span>
								</div>
								<p className="portfolio-project__summary">{project.summary}</p>
								<p>{project.description}</p>
								<ul className="portfolio-tags" aria-label={`${project.name} tech stack`}>
									{project.stack.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function ExperienceSection(): JSX.Element {
	return (
		<section className="portfolio-section portfolio-section--bordered" id="experience">
			<div className="portfolio-section__inner">
				<SectionHeading
					kicker="03 - Experience snapshot"
					title={
						<>
							What I've been up to <em>professionally</em>
						</>
					}
					meta="skills + work history"
				/>
				<div className="portfolio-experience">
					<div className="portfolio-card portfolio-experience__now">
						<p className="portfolio-label">// Current framework</p>
						<h3>Builder with a founder mindset.</h3>
						<p>
							I bring entreprenuer thinking into software development: clear communication, user empathy,
							follow-through, and understanding the business impact of what we're building.
						</p>
					</div>
					<div className="portfolio-experience__list">
						{experienceItems.map((item) => (
							<article className="portfolio-card portfolio-experience__item" key={`${item.role}-${item.org}`}>
								<span>{item.period}</span>
								<h3>{item.role}</h3>
								<p className="portfolio-experience__org">{item.org}</p>
								<p>{item.description}</p>
							</article>
						))}
					</div>
					<div className="portfolio-card portfolio-skills">
						<p className="portfolio-label">// Tooling</p>
						<ul className="portfolio-tags portfolio-tags--large">
							{skills.map((skill) => (
								<li key={skill}>{skill}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

function ContactSection(): JSX.Element {
	const contactLinks = [
		{ label: "GitHub", value: "cameronmakarchuk", href: links.github, accent: "lime" },
		{ label: "LinkedIn", value: "in/cameronmakarchuk", href: links.linkedin, accent: "amber" },
		{ label: "Instagram", value: "@cameronmakarchuk", href: links.instagram, accent: "coral" },
		{ label: "X", value: "@cmakarchuk", href: links.x, accent: "lime" },
		{ label: "Fitness", value: "bluephoenixfitness.com", href: links.bluePhoenix, accent: "amber" },
	] satisfies Array<{ label: string; value: string; href: string; accent: Accent }>;

	return (
		<footer className="portfolio-section portfolio-contact" id="contact">
			<div className="portfolio-section__inner">
				<p className="portfolio-kicker">
					<span className="portfolio-kicker__dot" />
					04 - Contact
				</p>
				<div className="portfolio-contact__grid">
					<div>
						<h2>
							Let's <em>build</em> something impactful
						</h2>
						<p>
							Have an idea for something you need built? Just want to connect with another builder? You can find me at any of these spots, happy to connect.
						</p>
					</div>
					<div className="portfolio-contact__links">
						{contactLinks.map((item) => (
							<a
								href={item.href}
								className={`portfolio-contact__link ${accentClass(item.accent)}`}
								key={item.label}
								target={item.href.startsWith("http") ? "_blank" : undefined}
								rel={item.href.startsWith("http") ? "noreferrer" : undefined}
							>
								<span>{item.label}</span>
								<strong>{item.value}</strong>
							</a>
						))}
					</div>
				</div>
				<div className="portfolio-footerline">
					<span>© 2026 Cameron Makarchuk - Toronto, Canada - Remote</span>
					<span>EOF - built with care</span>
				</div>
			</div>
		</footer>
	);
}

function SectionHeading({
	kicker,
	title,
	meta,
}: {
	kicker: string;
	title: React.ReactNode;
	meta: string;
}): JSX.Element {
	return (
		<div className="portfolio-heading">
			<div className="portfolio-heading__meta">
				<p className="portfolio-label">{kicker}</p>
				<span>{meta}</span>
			</div>
			<h2>{title}</h2>
		</div>
	);
}
