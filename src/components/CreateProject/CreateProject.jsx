import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./CreateProject.css";


function CreateProject() {

   // STATES
    
  const token = window.localStorage.getItem("token");
  
//   const navigate = useNavigate();
  const [project, setProject] = useState({
      title: "",
      tagline: "",
      description: "",
      image: "",
      goal: "",
      date_closed: "",
      category:"",

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
              description: project.description,
              image: project.image,
              goal: project.goal,
              date_closed: project.date_closed,
              category: project.category,
        

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
        <div className="project--section">
        <h1 >Create a new project</h1>
            <form>
                <div className="form--input">
                <label htmlFor="title">Name: </label>
                <input
                type="text"
                id="title"
                placeholder="Give your project a name"
                onChange={handleChange}
                />
                </div>

                <div className="form--input">
                <label htmlFor="tagline">Short description: </label>
                <input
                type="textarea"
                id="tagline"
                placeholder="Enter a short summary of your project"
                onChange={handleChange}
                />
                </div>

                <div className="form--input">
                <label htmlFor="description">Long description: </label>
                <input
                type="textarea"
                id="description"
                placeholder="What is your project about?"
                onChange={handleChange}
                />
                </div>

                <div className="form--input">
                <label htmlFor="image">Cover image: </label>
                <input
                type="url"
                id="image"
                placeholder="Add an image URL"
                onChange={handleChange}
                />
                </div>

                <div className="form--input">
                <label htmlFor="goal">Goal in $: </label>
                <input
                type="number"
                id="goal"
                placeholder="How much money do you need to raise?"
                onChange={handleChange}
                />
                </div>

                <div className="form--input">
                <label htmlFor="date_closed">Goal date: </label>
                <input
                type="date"
                id="dte_closed"
                placeholder="When do you need the money by?"
                onChange={handleChange}
                />
                </div>

                <div className="form--input">
                <label htmlFor="category">Category: </label>
                <select id="category" onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                <option value={1}>Animals</option>
                <option value={2}>Humans</option>
                    </select>
            
                </div>

                <button type="submit"
                    onClick={handleSubmit}>
            Let the world know about your awesome project!
                </button>
            </form>
        </div>
        
    )
}

export default CreateProject;

