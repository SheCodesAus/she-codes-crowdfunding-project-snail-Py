import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectTabs.css";
import { useParams } from "react-router-dom";
import ProjectOwner from "../ProjectOwner/ProjectOwner";


function ProjectTabs() {

    // const [projectData, setProjectData] = useState({ pledges: [] });
    // const { id } = useParams();
    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
    //         .then((results) => {
    //             return results.json();
    //         })
    //         .then((data) => {
    //             console.log("Data", data)
    //             setProjectData(data);
    //         });
    // }, []);

    const [projectData, setProjectData] = useState({ project_faq: [] });
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
        <div className="project--description">
            <h2>Project description</h2>
            <p>{projectData.description}</p>

            <h2>FAQs</h2>
            {/* <p>{projectData.project_faq.question_text}</p>
            <p>{projectData.project_faq.answer_text}</p> */}
            <h2>Latest updates</h2>

            <Link to={`/project/${projectData.id}/edit/`}>Edit this project</Link>

        </div>

        
    )
}

export default ProjectTabs


