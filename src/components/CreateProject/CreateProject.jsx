import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CreateProject() {

   // STATES
    
  const token = window.localStorage.getItem("token");
  
//   const navigate = useNavigate();
  const [project, setProject] = useState({
      title: "",
      tagline: "",
    });


    // ACTIONS AND HELPERS OK
        
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
        const res = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            title: project.title,
            tagline: project.tagline,
          }),
        });
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (!token || token===null || token===undefined || token==="undefined") {
        return (
          <Link to="/login">Please login to create a project</Link>
        );
    }
    

    return (
        <div>
        <h1>Create a new project</h1>
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
            Let the world know about it!
                </button>
            </form>
        </div>
        
    )
}

export default CreateProject;

