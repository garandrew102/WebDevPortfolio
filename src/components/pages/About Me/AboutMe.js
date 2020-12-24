import React from "react";
import "./AboutMe.css";
import contactbg from "../../../videos/contactbg.mp4";

function AboutMe() {
  return (
    <div className="about-me">
      <video autoPlay loop muted>
        <source src={contactbg} type="video/mp4" />
      </video>
      <h1>About Me</h1>
    </div>
  );
}

export default AboutMe;
