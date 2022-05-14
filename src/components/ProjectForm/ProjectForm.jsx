import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectForm.css";

function ProjectForm({ projectId }) {

    // STATE

    // const token = window.localStorage.getItem("token");
    const [project, setProject] = useState({
        title: "",
        tagline: "",
    }),

    // ACTIONS AND HELPERS
        
    const handleChange = (event) => {
        const { id, value } = event.target;
        setProject((prevProject) => ({
          ...prevProject,
          [id]: value,
        }));
      };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            // project_id: projectId,
            title: project.title,
            tagline: project.tagline,
            // supporter: window.localStorage.getItem("username"),
          }),
        });
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };


    return (
        <div>
        <h1>Edit this project</h1>
            <form>
                <div>
                <label htmlFor="title">Name:</label>
                <input
                type="text"
                id="title"
                placeholder={project.title}
                onChange={handleChange}
                />
                </div>

                <div>
                <label htmlFor="tagline">Short description:</label>
                <input
                type="text"
                id="tagline"
                placeholder="Enter comment here"
                onChange={handleChange}
                />
                </div>

                <button type="submit"
                    onClick={handleSubmit}>
            Submit Pledge
                </button>
            </form>
        </div>
        
    )
}

export default ProjectForm;

