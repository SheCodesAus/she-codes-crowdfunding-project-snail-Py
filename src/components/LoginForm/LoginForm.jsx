import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    // STATE

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    
    // HOOKS - Create a redirect aftern logging into the site

    const navigate = useNavigate();
     
    // ACTIONS AND HELPERS

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
        }));
    };    

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
          try {
            const response = await fetch(
              `${process.env.REACT_APP_API_URL}api-token-auth/`,
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
              }
            );
              const data = await response.json();
              window.localStorage.setItem("token", data.token);
              navigate("/");

          } catch (err) {
            console.log(err);
          }
        }
      };

  return (
    <form>
        <div>
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
        />
        
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
        />
        </div>
        <button type="submit" onClick={handleSubmit}>
        Login
        </button>
    </form>
    );
}

export default LoginForm;
          
