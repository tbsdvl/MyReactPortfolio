import React, { Component } from 'react';
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Hero from "../Hero";
import Intro from "../Intro";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import GedditDone from "./GedditDone";

class PageRoute extends Component {
    render() {
        return (
            <Switch>
            <Route path="/">
            <Hero />
            <Intro />
            <Portfolio />
            <Contact />
            </Route>
            <Route exact path="/gedditdone">
                <GedditDone />
            </Route>
            </Switch>
        )
    }
}

export default PageRoute;