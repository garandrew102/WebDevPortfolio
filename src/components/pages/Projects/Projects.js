import React from "react";
import Cards from "../../Cards/Cards";
import "../../../App.css";
import "../Projects/Projects.css";
import projectsbg from "../../../videos/projectsbg.mp4";

function Projects() {
  return (
    <div className="projects">
      <video autoPlay loop muted>
        <source src={projectsbg} type="video/mp4" />
      </video>
      <Cards />
    </div>
  );
}

export default Projects;
