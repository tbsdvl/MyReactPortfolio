import React, { Component } from "react";
import { Link } from "react-router-dom";

 class Project extends Component {
  render() {
    return (
        <article>
          <Link to={this.props.to}>{this.props.name}</Link>
          <img src={this.props.src} alt="project"/>
                        <h3>Description</h3>
                            <p>{this.props.paragraph}</p>
        </article>
      );
  }
}  
  


export default Project;
