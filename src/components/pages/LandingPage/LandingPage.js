import React from "react";
import { Button } from "react-bootstrap";
import homePaint from "../../../videos/homePaint.mp4";
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
        <Button className="btn">CONTACT</Button>
      </div>
    </div>
  );
}

export default LandingPage;
