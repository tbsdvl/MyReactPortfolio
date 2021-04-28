import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

class Project extends Component {

    render() {
        return (
            <article>
                <Link to={this.props.to}>
                    <img src={this.props.src} alt="project"/>
                </Link>
                    <h3>Description</h3>
                        <p>{this.props.paragraph}</p>
            </article>
        )
    }
}

export default Project;