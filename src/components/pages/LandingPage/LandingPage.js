import React from "react";
import homePaint from "../../../videos/homePaint.mp4";
import Button from "../../Button/Button";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <video autoPlay muted>
        <source src={homePaint} type="video/mp4" />
      </video>
      <h1>Hello</h1>
      <p>I'm A Web Developer</p>
      <div className="landing-page-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          CONTACT
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
