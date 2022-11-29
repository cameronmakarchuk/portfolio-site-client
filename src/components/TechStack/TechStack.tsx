import React from "react";
import "./TechStack.scss";
import expressLogo from "../../assets/images/express-logo.png";
import htmlLogo from "../../assets/images/html-logo.png";
import javascriptLogo from "../../assets/images/javascript-logo.png";
import jwtLogo from "../../assets/images/jwt-logo.png";
import knexLogo from "../../assets/images/knex-logo.png";
import mysqlLogo from "../../assets/images/mysql-logo.png";
import nodeLogo from "../../assets/images/node-logo.png";
import reactLogo from "../../assets/images/React_logo.png";
import sassLogo from "../../assets/images/sass-logo.png";
import cssLogo from "../../assets/images/css-logo.png";
import typescriptLogo from "../../assets/images/typescript-logo.png";

export default function TechStack(): JSX.Element {
  return (
    <section className="tech-stack">
      <div className="tech-stack__tech-logo">
        <img
          src={htmlLogo}
          alt=" logo"
          className="tech-stack__tech-logo--img"
        />
      </div>
      <div className="tech-stack__tech-logo">
        <img src={cssLogo} alt=" logo" className="tech-stack__tech-logo--img" />
      </div>
      <div className="tech-stack__tech-logo">
        <img
          src={javascriptLogo}
          alt=" logo"
          className="tech-stack__tech-logo--img"
        />
      </div>
      <div className="tech-stack__tech-logo">
        <img
          src={sassLogo}
          alt=" logo"
          className="tech-stack__tech-logo--img"
        />
      </div>
      <div className="tech-stack__tech-logo">
        <img
          src={typescriptLogo}
          alt=" logo"
          className="tech-stack__tech-logo--img"
        />
      </div>
      <div className="tech-stack__tech-logo">
        <img
          src={reactLogo}
          alt=" logo"
          className="tech-stack__tech-logo--img"
        />
      </div>
      <div className="tech-stack__tech-logo">
        <img
          src={nodeLogo}
          alt=" logo"
          className="tech-stack__tech-logo--img"
        />
      </div>
      <div className="tech-stack__tech-logo">
        <img
          src={expressLogo}
          alt=" logo"
          className="tech-stack__tech-logo--img"
        />
      </div>
      <div className="tech-stack__tech-logo">
        <img
          src={knexLogo}
          alt=" logo"
          className="tech-stack__tech-logo--img"
        />
      </div>
      <div className="tech-stack__tech-logo">
        <img
          src={mysqlLogo}
          alt=" logo"
          className="tech-stack__tech-logo--img"
        />
      </div>
      <div className="tech-stack__tech-logo">
        <img src={jwtLogo} alt=" logo" className="tech-stack__tech-logo--img" />
      </div>
    </section>
  );
}
