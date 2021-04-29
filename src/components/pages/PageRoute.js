import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "../Hero";
import Intro from "../Intro";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import GedditDone from "./GedditDone";
import FitnessTracker from "./FitenessTracker";
import NoteTaker from "./NoteTaker";
import EmployeeTracker from "./EmployeeTracker";
import Ecommerce from "./Ecommerce";
import TeamProf from "./TeamProf";
import ReadmeGen from "./ReadmeGen";

class PageRoute extends Component {
    render() {
        return (
            <Router>
            <Switch>
            <Route exact path="/">
            <Hero />
            <Intro />
            <Portfolio />
            <Contact />
            </Route>
            <Route exact path="/gedditdone">
                <GedditDone />
            </Route>
            <Route exact path="/fitnesstracker">
                <FitnessTracker />
            </Route>
            <Route exact path="/notetaker">
                <NoteTaker />
            </Route>
            <Route exact path="/employeetracker">
                <EmployeeTracker />
            </Route>
            <Route exact path="/ecommerce">
                <Ecommerce />
            </Route>
            <Route exact path="/teamprofilegen">
                <TeamProf />
            </Route>
            <Route exact path="/readmegen">
                <ReadmeGen />
            </Route>
            </Switch>
            </Router>
        )
    }
}

export default PageRoute;