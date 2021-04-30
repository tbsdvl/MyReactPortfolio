import React, { Component } from 'react';

// Render the nav tab in the master header div

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className="navlist">
                    <li><a href="/" rel="noreferrer">Home</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="https://github.com/tbsdvl" rel="noreferrer" target="_blank">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/triston-burns-324499209/" rel="noreferrer" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/tbsdvl/Portfolio/blob/main/resume.pdf" rel="noreferrer" target="_blank">Resume</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;