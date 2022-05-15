import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import HomePageHero from "../components/HomePageHero/HomePageHero";
import HomePageSection from "../components/HomePageSection/HomePageSection"

function HomePage() {

    return (
        <div>
            <HomePageHero />
            <HomePageSection />
        
        </div>
    )
}

export default HomePage