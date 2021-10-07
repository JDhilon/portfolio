import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Project from "./Project";

import "./App.css";

function App() {

    // TODO: Add in a function to generate projects, based on JSON file passed in

    return <div class="background">
        <Header />
        <Project isLeft={true}/>
        <Project ifLeft={false}/>
        <Footer />
    </div>;
}

export default App;