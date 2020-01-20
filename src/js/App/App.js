import React from 'react';
import {HashRouter as Router, Route,Switch} from "react-router-dom";
import Navigation from "../Navigation/navigation";
import Header from "../upperBar/header";

function App () {
    return (
        <Router>
            <Navigation/>
            <Header/>
        </Router>
    )
}

export default App;