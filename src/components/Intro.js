import React, { Component } from 'react';

// Render the About Me section on the home page

class Intro extends Component {

    render() {
        return (
            <section className="intro">
                <img src="./images/seattle.jpg" alt="seattle"/>
                <div className="introinfo">
                <h2>About Me</h2>
                <p>I am an aspiring web developer with a background in studying Data Science from Arizona
                    State University. I develop applications using technologies such as React, express, and node.js. In my free time, I like to build miniatures, enjoy the outdoors, and code.
                </p>
                </div>
            </section>
        )
    }
}

export default Intro;