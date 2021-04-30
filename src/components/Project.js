import React, { Component } from "react";
import { Link } from "react-router-dom";

// Render the project article inside the portfolio 
//on the home page

class Project extends Component {
  render() {
      return (
        <article className="project">
          <Link to={this.props.to}>{this.props.name}</Link>
          <br></br>
          <br></br>
          <div>
            <img src={this.props.src} alt="project"/>
                <h3>{this.props.description}</h3>
                    <p className="paragraph">{this.props.paragraph}</p>
            </div>
        </article>
      );
  }
}

export default Project;
