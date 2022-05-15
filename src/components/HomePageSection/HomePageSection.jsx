import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePageSection.css";
import ProjectCard from "../ProjectCard/ProjectCard";

function HomePageSection() {

    const [projectList, setProjectList] = useState([]);
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
            
        setProjectList(data);
     });

}, []);
    
    return (
    <div className="section--home">
            
        <h2 className="section--title">Browse the latest projects in your area</h2>
            
        <div id="project-list">
        {projectList.map((projectData, key) => {
        return<ProjectCard key={key} projectData={projectData}/>;            })}
        </div>
            
    </div>               
    )
}

export default HomePageSection;