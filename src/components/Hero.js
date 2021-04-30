import React, { Component } from "react";

// Render the Hero image on the home page

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <img src="./images/tucsonnight.jpg" width="100%"
        height="900px" alt="hero"/>
        <p>Hello, I'm Triston. Welcome to my website.</p>
      </section>
    );
  }
}

export default Hero;
