import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"


function Nav() {
    return (
        <header>
            <img className="header--logo" src="../pointjar-logo-2.png" />
            <h2 className="header--title">POINT JAR</h2>
            <nav>
                <Link className="header--nav" to="/">Home</Link>
                <Link className="header--nav" to="/project/:id">Projects</Link>
                <Link className="header--nav" to="/login">Login</Link>
            </nav>
        </header>
    )
}

export default Nav