import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectHero.css";
import { useParams } from "react-router-dom";
import ProjectOwner from "../ProjectOwner/ProjectOwner";
import PledgeSupporter from "../PledgeSupporter/PledgeSupporter";
import PledgeForm from "../PledgeForm/PledgeForm";


function Hero() {

    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
        return results.json();
         })
            .then((data) => {
             console.log("Data", data)
         setProjectData(data);
         });
    }, []);
    
    return (
        <section>
            <h1 className="hero--title">{projectData.title}</h1>
            <p className="hero--tagline">{projectData.tagline}</p>
            <div className="grid--container">
                <div>
                <img className="hero--image" src={projectData.image} />
                </div>
                <div className="hero--sidebar">
                    <p>Project created on {new Date(projectData.date_created).toLocaleString('en-AU',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} by <ProjectOwner owner={projectData.owner} />.</p>
                    <p>{`Status: ${projectData.is_open}`}</p>
                    <p>Goal: ${projectData.goal}</p>

                <p> {projectData.pledges.length} people have just made a donation :</p>
                <ul>
                    {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li key={`${key}-${pledgeData.id}`}>
                            <span className="supporter--amount">${pledgeData.amount}</span> from <span className="supporter--name"><PledgeSupporter supporter={pledgeData.supporter}/></span>, <span className="supporter--comment">"{pledgeData.comment}"</span>
                        </li>
                    )
                    })}
                    </ul>
                    <PledgeForm projectId={id}/>
                </div>
            </div>
        </section>
    )
}

export default Hero