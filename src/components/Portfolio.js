import React, { Component } from 'react';
import Project from "./Project"

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <h2>Portfolio</h2>
                <Project to="/gedditdone" src="https://images.unsplash.com/photo-1584549239925-5554aa6b9183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" paragraph="This is a paragraph for GedditDone's description" name="GedditDone"/>
            </section>
        )
    }
}


export default Portfolio;