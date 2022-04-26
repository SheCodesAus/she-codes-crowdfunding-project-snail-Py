import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"


function Nav() {
    return (
    <div>
        <header>
            <img className="header--logo" src="./pointjar-logo-2.png" />
            <h2 className="header--title">POINT JAR</h2>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/project/:id">Projects</Link>
            <Link to="/login">Login</Link>
        </nav>
        </header>

    </div>
    )
}

export default Nav