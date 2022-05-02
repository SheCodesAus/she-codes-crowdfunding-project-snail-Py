// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

// function PledgeForm() {

//     // STATE

//     const [pledge, setPledge] = useState({
//         amount: "",
//         comment:"",
//     });
    
//     // HOOKS - Create a redirect aftern logging into the site

//     const navigate = useNavigate();
     
//     // ACTIONS AND HELPERS

//     const handleChange = (event) => {
//         const { id, value } = event.target;
//         setPledge((prevPledge) => ({
//         ...prevPledge,
//         [id]: value,
//         }));
//     };    

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         // if (credentials.username && credentials.password) {
//           try {
//             const response = await fetch(
//               `${process.env.REACT_APP_API_URL}pledges/${id}`,
//               {
//                 method: "post",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(pledge),
//               }
//             );
//               const data = await response.json();
//               window.localStorage.setItem("token", data.token);
//               navigate("/login");

//           } catch (err) {
//             console.log(err);
//           }
//         }
//     };

// return (
//     <form>
//         <div>
//             <label htmlFor="amount">Enter a donation amount:</label>
//             <input
//                 type="text"
//                 id="amount"
//                 placeholder="Enter how many points you would like to donate"
//                 onChange={handleChange}
//             />
                
//         </div>
//         <div>
//             <label htmlFor="comment">Leave a comment: </label>
//             <input
//                 type="text"
//                 id="comment"
//                 placeholder="Say a little something"
//                 onChange={handleChange}
//             />
                
//         </div>
//         <button type="submit" onClick={handleSubmit}>
//             Break your jar
//         </button>
//     </form>
// )
// }


// export default PledgeForm;
          