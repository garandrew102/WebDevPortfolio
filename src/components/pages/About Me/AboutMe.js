import React from "react";
import "./AboutMe.css";
import contactbg from "../../../videos/contactbg.mp4";

function AboutMe() {
  return (
    <div className="about-me">
      <video autoPlay loop muted>
        <source src={contactbg} type="video/mp4" />
      </video>
      <di>
        <h1>About Me</h1>
      </di>
      <div>
        <p>Hey There!</p>
      </div>
    </div>
  );
}

export default AboutMe;
