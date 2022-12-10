import "./ContactPage.scss";
import twitterLogo from "../../assets/icons/twitter-logo.svg";
import instagramLogo from "../../assets/icons/instagram-logo.svg";
import linkedinLogo from "../../assets/icons/linkedin-logo.svg";
import githubLogo from "../../assets/icons/github-logo.svg";
import facebookLogo from "../../assets/icons/facebook-logo.svg";
import emailLogo from "../../assets/icons/email-logo.svg";

export default function ContactPage(): JSX.Element {
  return (
    <section className="contact-page">
      <h2 className="contact-page__title">Connect With Cameron</h2>

      <div className="contact-page__connect-wrapper">
        <img
          src={emailLogo}
          alt="Email Cameron"
          className="contact-page__connect-icon"
        />
        <img
          src={linkedinLogo}
          alt="Cameron LinkedIn"
          className="contact-page__connect-icon"
        />
        <img
          src={twitterLogo}
          alt="Cameron Twitter"
          className="contact-page__connect-icon"
        />
        <img
          src={instagramLogo}
          alt="Cameron Instagram"
          className="contact-page__connect-icon"
        />
        <img
          src={facebookLogo}
          alt="Cameron Facebook"
          className="contact-page__connect-icon"
        />
        <img
          src={githubLogo}
          alt="Cameron GitHub"
          className="contact-page__connect-icon"
        />
      </div>
    </section>
  );
}

// Name
// email
// linkedin
// twitter
// instagram
// facebook
// github
