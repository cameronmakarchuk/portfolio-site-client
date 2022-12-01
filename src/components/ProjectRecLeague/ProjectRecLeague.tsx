import React from "react";
import recleagueiPhone from "../../assets/images/recleague-iphone.png";
import recleagueAddUserIphone from "../../assets/images/recleague-adduser-iphone.png";
import recleagueProfileIphone from "../../assets/images/recleague-profile-iphone.png";

export default function ProjectRecLeague(): JSX.Element {
  return (
    <section className="project">
      <h2 className="project__title">RecLeague</h2>
      <h3 className="project__subtitle">
        Creator | UI/UX, Development | November 2022
      </h3>
      <div className="project__img-container">
        <img
          src={recleagueiPhone}
          alt="recleague iphone mockup"
          className="project__img-mockup"
        />
        <img
          src={recleagueAddUserIphone}
          alt="recleague iphone mockup"
          className="project__img-mockup"
        />
        <img
          src={recleagueProfileIphone}
          alt="recleague iphone mockup"
          className="project__img-mockup"
        />
      </div>
    </section>
  );
}
