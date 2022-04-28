import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectHero.css";
import { useParams } from "react-router-dom";

function Hero() {

    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
        return results.json();
         })
         .then((data) => {
         setProjectData(data);
         });
    }, []);
    
    return (
        <section>
            <h1 className="hero--title">{projectData.title}</h1>
            <div className="grid--container">
                <div>
                <img className="hero--image" src={projectData.image} />
                </div>
                <div className="hero--sidebar">
                <p>Created at: {projectData.date_created}</p>
                <p>By: {projectData.owner}</p>
                <p>{`Status: ${projectData.is_open}`}</p>
                <button>BREAK YOUR JAR</button>
                </div>
            </div>
            <div className="grid--container">
            <h2>Pledges:</h2>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    )
                })}
            </ul>
            </div>
        </section>
    )
}

export default Hero