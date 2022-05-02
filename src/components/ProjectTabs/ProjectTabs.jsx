import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectTabs.css";
import { useParams } from "react-router-dom";
import ProjectOwner from "../ProjectOwner/ProjectOwner";
import ProjectHero from "../ProjectHero/ProjectHero";

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

    // function openTab() {
    //     return ()
    // }
        
    //     (evt, cityName) {
    //     // Declare all variables
    //     var i, tabcontent, tablinks;
      
    //     // Get all elements with class="tabcontent" and hide them
    //     tabcontent = document.getElementsByClassName("tabcontent");
    //     for (i = 0; i < tabcontent.length; i++) {
    //       tabcontent[i].style.display = "none";
    //     }
      
    //     // Get all elements with class="tablinks" and remove the class "active"
    //     tablinks = document.getElementsByClassName("tablinks");
    //     for (i = 0; i < tablinks.length; i++) {
    //       tablinks[i].className = tablinks[i].className.replace(" active", "");
    //     }
      
    //     // Show the current tab, and add an "active" class to the button that opened the tab
    //     document.getElementById(cityName).style.display = "block";
    //     evt.currentTarget.className += " active";
    //   }    
    
    return (
        <div>

            {/* Tab links */}
        <div className="tab--container">
                <button className="tab--links" onClick="openTab(event, 'Project')">Project</button>
        <button className="tab--links" onClick="openTab(event, 'QAs')">QAs</button>
        <button className="tab--links" onClick="openTab(event, 'Posts')">Posts</button>
         </div>
            
            {/* Tab content */}
        <div id="Project" className="tab--content">
        <h2>About this project</h2>
        <p className="hero--description">{projectData.description}</p>
        </div>

        <div id="QAs" className="tab--content">
        <h2>Questions and Answers</h2>
        <p>Test</p>
        </div>

        <div id="Post" className="tab--content">
        <h2>Posts</h2>
        <p>Test</p>
        </div>

        </div>

    )
}

export default ProjectTabs