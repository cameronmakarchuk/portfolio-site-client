import "./AboutPage.scss";
import cmSignature from "../../assets/icons/cm-signature-black.svg";
import camProfilePic from "../../assets/images/cam-profile-square.png";
import TechStack from "../../components/TechStack/TechStack";

export default function AboutPage(): JSX.Element {
	return (
		<section className="about-page">
			<h2 className="about-page__title">Hey, I'm Cameron!</h2>

			<p className="about-page__description">
				Ever since I was a kid I've loved 2 things - sports/fitness and
				computers. You'd be just as likely to find me running around outside
				playing basketball, or in my bedroom sitting behind our first computer
				in the 90's teaching myself html.
			</p>

			<p className="about-page__description">
				As a kid I would get so much pleasure from being able to build things on
				my computer with code, and joy when I would finally figure out a
				challenging problem in the process.
			</p>
			<p className="about-page__description">
				That passion continued as a fitness professional when I made the
				decision to close my personal training studio in 2015 and begin shifting
				my business into the online coaching model that{" "}
				<a href="https://bluephoenixfitness.com" className="about-page__link">
					BluePhoenix Fitness
				</a>{" "}
				runs on today.
			</p>
			<p className="about-page__description">
				I always found myself being drawn towards “digital” - whether it was
				learning digital marketing for my business, or getting lost in the code
				of my website for hours.
			</p>
			<p className="about-page__description">
				So after spending 15+ years helping thousands of people transform their
				health in the fitness industry, I'm finally leaning into my second
				passion of computers. Specifically full-stack software development.
			</p>
			<p className="about-page__description">
				Even though I didn't start my career in tech, I believe my unique blend
				of skills from leading teams, managing multi-million dollar fitness
				facilities, and building my own businesses will allow me to thrive as a
				software engineer.
			</p>

			<TechStack />

			<div className="about-page__profile-card">
				<img
					src={camProfilePic}
					alt="Cameron profile"
					className="about-page__profile-img"
				/>

				<img
					src={cmSignature}
					alt="Cameron Makarchuk Signature"
					className="about-page__signature"
				/>
			</div>
		</section>
	);
}
