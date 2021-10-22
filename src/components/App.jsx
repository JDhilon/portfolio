import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Project from "./Project";

import "./App.css";

import projects from "../projects";

function App() {

    // Creates Project components based on a list passed in
    function createProjects(projectList) {
        return projects.map((project, idx) => {
            return <Project isLeft={idx%2 === 0} proj={project} id={"proj" + idx}/>;
        });
    }

    

    return <div class="background">
        <Header projectNames={projects.map((proj) => {return proj.title;})}/>
        <div class="projectList">
            {createProjects(projects)}
        </div>
        <Footer />
    </div>;
}

export default App;