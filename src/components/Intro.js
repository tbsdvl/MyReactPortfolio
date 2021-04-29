import React, { Component } from 'react';

class Intro extends Component {

    render() {
        return (
            <section className="intro">
                <img src="./images/seattle.jpg" alt="seattle"/>
                <div className="introinfo">
                <h2>Description</h2>
                <p>lorem ipsum</p>
                </div>
            </section>
        )
    }
}

export default Intro;