import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
  const { projectData } = props;
  return (
    <div className="project-card">
      <Link to={`/project/${projectData.id}`}>
        <img src={projectData.image} />
        <h3>{projectData.title}</h3>
        <Link className="project-card--link" to={`/project/${projectData.id}`}>Break my Point Jar</Link>

      </Link>
    </div>
  );
}

export default ProjectCard;
