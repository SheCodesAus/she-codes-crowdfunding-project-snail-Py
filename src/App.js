import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import LoginPage from "./pages/LoginPage"
import PledgePage from "./pages/PledgePage"
import "./App.css"


function App() {
  return (
    <div>
      <Router>
        <Nav />
          <Routes>
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id/pledge" element={<PledgePage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
