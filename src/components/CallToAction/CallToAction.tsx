import React from "react";
import "./CallToAction.scss";

export default function CallToAction(): JSX.Element {
  return (
    <section className="cta">
      <h2 className="cta__title">
        I occassionally take on freelance opportunities.
      </h2>
      <p className="cta__description">
        Need some help bringing an exciting project to life?
      </p>
      <p className="cta__description">Send me a message and let's chat.</p>
    </section>
  );
}
