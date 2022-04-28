import React, { useState, useEffect } from "react";
import ProjectHero from "../components/ProjectHero/ProjectHero"
// import { useParams } from "react-router-dom";

function ProjectPage() {
//     const [projectData, setProjectData] = useState({ pledges: [] });
//     const { id } = useParams();
//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
//         .then((results) => {
//         return results.json();
//          })
//          .then((data) => {
//          setProjectData(data);
//          });
// }, []);
   
    return (
        <ProjectHero />
    )
}

export default ProjectPage