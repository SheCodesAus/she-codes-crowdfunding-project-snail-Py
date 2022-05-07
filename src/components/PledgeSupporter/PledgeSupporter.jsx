import React, { useState, useEffect } from "react";

function PledgeSupporter({ supporter }) {
    
    // State
    const [supporterData, setSupporterData] = useState();
    
    // Actions & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${supporter}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setSupporterData(data);
        });
    }, [supporter]);

 if (!supporterData) {
     return null
 }

    // Normal State
    return (
        <span>{supporterData.username}</span>
            
    );
}

export default PledgeSupporter;