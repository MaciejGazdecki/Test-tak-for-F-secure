import React,{useState} from 'react';
import {HashRouter as Router, Route,Switch} from "react-router-dom";
import Navigation from "../Navigation/navigation";
import Header from "../upperBar/header";
import Home from "../Home/home";
import FeatureTwo from "../Features/FeatureTwo/featureTwo";
import FeatureThree from "../Features/FeatureThree/featureThree";
import FeatureFour from "../Features/FeatureFour/featureFour";
import FeatureFive from "../Features/FeatureFive/featureFive";
import Another from "../Features/Another/another";
import YetAnother from "../Features/yetAnother/yetAnother";
import {OptionContext} from "./optionContext";
import {SetOptionContext} from "./setOptionContext";

function App () {
    const [option, setOption] = useState('');
    return (
        <Router>
            <OptionContext.Provider value={option}>
                <SetOptionContext.Provider value={setOption}>
                    <Header/>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path='/feature-two' component={FeatureTwo}/>
                        <Route path="/feature-three" component={FeatureThree}/>
                        <Route path="/feature-four" component={FeatureFour}/>
                        <Route path="/feature-five" component={FeatureFive}/>
                        <Route path="/another" component={Another}/>
                        <Route path="/yet-another" component={YetAnother}/>
                    </Switch>
                </SetOptionContext.Provider>
            </OptionContext.Provider>
        </Router>
    )
}

export default App;