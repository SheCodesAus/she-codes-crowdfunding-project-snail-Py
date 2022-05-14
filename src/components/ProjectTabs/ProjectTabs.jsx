import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectTabs.css";
import { useParams } from "react-router-dom";
import ProjectOwner from "../ProjectOwner/ProjectOwner";


function ProjectTabs() {

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
        <div>
            <p>{projectData.description}</p>
        </div>

        
    )
}

export default ProjectTabs








// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

// export default function ProjectTabs() {
//   const [value, setValue] = React.useState('1');

// //   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
// //     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }
