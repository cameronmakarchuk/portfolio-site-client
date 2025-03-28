import "./MainHero.scss";
import { Link } from "react-router-dom";
import githubLogo from "../../assets/icons/github-logo.svg";
import instagramLogo from "../../assets/icons/instagram-logo.svg";
import linkedinLogo from "../../assets/icons/linkedin-logo.svg";
import twitterLogo from "../../assets/icons/twitter-logo.svg";
import camProfilePic from "../../assets/images/cam-profile-square.png";

export default function MainHero(): JSX.Element {
	return (
		<section className="main-hero">
			<img
				src={camProfilePic}
				alt="Cameron profile"
				className="main-hero__profile-img"
			/>
			<div className="main-hero__profile-wrapper">
				<h1 className="main-hero__title">
					Software developer, fitness pro, coffee connoisseur.
				</h1>
				<p className="main-hero__intro">
					I'm Cameron, your friendly neighbourhood fitness pro turned
					code-slinging wizard. Back in 2022 I swapped the kettlebells for code
					and dove headfirst into a childhood passion for computers and tech.
				</p>
				<Link className=" main-hero__intro main-hero__intro-link" to="/about">
					Intrigued? Catch the full story here
				</Link>
				<div className="main-hero__social-icons">
					<a
						href="https://twitter.com/cmakarchuk"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={twitterLogo}
							alt="twitter icon"
							className="main-hero__social-icon"
						/>
					</a>
					<a
						href="https://instagram.com/cameronmakarchuk"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={instagramLogo}
							alt="instagram icon"
							className="main-hero__social-icon"
						/>
					</a>
					<a
						href="https://linkedin.com/in/cameronmakarchuk"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={linkedinLogo}
							alt="linkedin icon"
							className="main-hero__social-icon"
						/>
					</a>
					<a
						href="https://github.com/cameronmakarchuk"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={githubLogo}
							alt="github icon"
							className="main-hero__social-icon"
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
