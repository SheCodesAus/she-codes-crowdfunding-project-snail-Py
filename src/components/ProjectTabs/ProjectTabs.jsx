import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectTabs.css";
import { useParams } from "react-router-dom";
import ProjectOwner from "../ProjectOwner/ProjectOwner";
import ProjectHero from "../ProjectHero/ProjectHero";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function ProjectTabs() {

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
//         <Tabs>
//     <TabList>
//       <Tab>Title 1</Tab>
//       <Tab>Title 2</Tab>
//     </TabList>

//     <TabPanel>
//       <h2>Any content 1</h2>
//     </TabPanel>
//     <TabPanel>
//       <h2>Any content 2</h2>
//     </TabPanel>
//   </Tabs>
// );
        
// }

        <p>Tabbed content</p>

export default ProjectTabs