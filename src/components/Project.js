import React, { Component } from "react";
import { Link } from "react-router-dom";


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
                    <p>{this.props.paragraph}</p>
            </div>
          {/* <Content /> */}
        </article>
      );
  }
}

export default Project;
