import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Project from "./Project";

import "./App.css";

function App() {

    // Creates Project components based on a list passed in
    function createProjects(projectList) {
        return projects.map((project, idx) => {
            return <Project isLeft={idx%2 === 0} proj={project} id={"proj" + idx}/>;
        });
    }

    const projects = [
        {
            title: "titleOne",
            description: "This is my first project description",
            links: {
                github: "http://www.github.com",
                website: "http://www.google.com",
                youtube: "http://www.youtube.com"
            },
            image: "http://via.placeholder.com/480x288"
        },
        {
            title: "titleTwo",
            description: "This is my second project description",
            links: {
                github: "http://www.github.com",
                website: "http://www.google.com",
                youtube: "http://www.youtube.com"
            },
            image: "http://via.placeholder.com/480x480"
        },
        {
            title: "titleThree",
            description: "This is my third project description",
            links: {
                github: "http://www.github.com",
                website: "http://www.google.com",
                youtube: "http://www.youtube.com"
            },
            image: "http://via.placeholder.com/480x288"
        },
        {
            title: "titleFour",
            description: "This is my fourth project description",
            links: {
                github: "http://www.github.com",
                website: "http://www.google.com",
                youtube: "http://www.youtube.com"
            },
            image: "http://via.placeholder.com/480x480"
        },
        {
            title: "titleFive",
            description: "This is my fifth project description",
            links: {
                github: "http://www.github.com",
                website: "http://www.google.com",
                youtube: "http://www.youtube.com"
            },
            image: "http://via.placeholder.com/480x288"
        },
        {
            title: "titleSix",
            description: "This is my sixth project description",
            links: {
                github: "http://www.github.com",
                website: "http://www.google.com",
                youtube: "http://www.youtube.com"
            },
            image: "http://via.placeholder.com/480x480"
        }
    ];

    return <div class="background">
        <Header projectNames={projects.map((proj) => {return proj.title;})}/>
        <div class="projectList">
            {createProjects(projects)}
        </div>
        <Footer />
    </div>;
}

export default App;