import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        <Link to="/contact">
          <Button className="landing-page-btn-style">CONTACT</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
