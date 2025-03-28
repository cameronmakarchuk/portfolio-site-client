import "./About.scss";
import cmSignature from "../../assets/icons/cm-signature-white.png";
import camProfilePic from "../../assets/images/cam-profile-square.png";

export default function AboutPage(): JSX.Element {
	return (
		<section className="about-page">
			<h2 className="about-page__title">
				From Sweat To Software: Life Rebooted
			</h2>

			<p className="about-page__description">
				Hey there! I’m Cameron—once your friendly neighborhood fitness pro, now
				a code-slinging wizard with a knack for reinvention. For 15 years, I was
				the maestro of sweat, running a private personal training studio and an
				online coaching empire under the BluePhoenix Fitness banner. It was a
				world of grunts, gains, and glory—until I swapped dumbbells for
				debuggers to chase a childhood dream of bending computers to my will.
			</p>
			<p className="about-page__description">
				As a kid, I’d lose myself in the thrill of building things with code,
				grinning ear-to-ear when a tricky problem finally clicked. That spark
				never faded, even as a fitness pro.
			</p>

			<p className="about-page__description">
				In 2015, I closed my studio and pivoted to an online coaching model,
				leaning hard into the digital realm. Whether it was mastering digital
				marketing or tinkering with my website’s code for hours, I couldn’t
				resist the pull of the virtual. So, two years ago, I leapt fully into
				software development, channeling the same gusto I once brought to
				deadlifts into crafting digital magic.
			</p>

			<p className="about-page__description">
				When I’m not tethered to a screen, you’ll find me hiking rugged trails,
				cycling like I’m outrunning deadlines, or jetting off to snag passport
				stamps and the occasional dubious souvenir. From sculpting bodies to
				shaping code, I’m all about building—preferably with a strong coffee in
				hand. Welcome to my world!``
			</p>

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
