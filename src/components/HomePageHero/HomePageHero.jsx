import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePageHero.css";

function HomePageHero() {
    
    return (
    <div>
        <div className="home--hero">
            <h1 className="home--title">Start using your loyalty points for a good cause!</h1>
            <p className="home--tagline">Point Jar is the only crowdfunding platform that turns your loyalty points into cash!</p>
            <p className="home--tagline">Specially designed to help non-for-profits finance specific local projects using people's donations of their loyalty points, miles or cash.</p>
        </div>
            
    </div>               
    )
}

export default HomePageHero;