import React, { Component } from "react";
import Project from "./Project";

class Portfolio extends Component {
  render() {
    const description = <h3>Description</h3>;

    return (
      <div className="portback">
        <h2 id="portfolio">Portfolio</h2>
        <section className="portfolio">
          <div className="showcase">
            <Project
              to="/gedditdone"
              src="https://images.unsplash.com/photo-1584549239925-5554aa6b9183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              description={description}
              paragraph="GedditDone"
              name="GedditDone"
            />
          </div>
          <div className="sidebyside">
            <div className="card">
              <Project
                to="/fitnesstracker"
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2768&q=80"
                name="Fitness Tracker"
              />
            </div>
            <div className="card">
              <Project
                to="/notetaker"
                src="https://images.unsplash.com/photo-1527345931282-806d3b11967f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80"
                name="Note Taker"
              />
            </div>
          </div>
          <div className="sidebyside">
            <div className="card">
              <Project
                to="/ecommerce"
                src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
                name="Ecommerce Backend"
              />
            </div>
            <div className="card">
              <Project
                to="/employeetracker"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
                name="Employee Tracker"
              />
            </div>
          </div>
          <div className="sidebyside">
            <div className="card">
              <Project
                to="/teamprofilegen"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
                name="Team Profile Generator"
              />
            </div>
            <div className="card">
              <Project
                to="/readmegen"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2704&q=80"
                name="README Generator"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
