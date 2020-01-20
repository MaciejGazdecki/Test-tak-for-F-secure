import React from 'react';
import {HashRouter as Router, Route,Switch} from "react-router-dom";
import Navigation from "../Navigation/navigation";


function App () {
    return (
        <Router>
            <Navigation/>
        </Router>
    )
}

export default App;