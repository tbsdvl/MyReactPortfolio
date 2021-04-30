import React, { Component } from "react";
import Project from "./Project";

// Render the Portfolio section on the home page

class Portfolio extends Component {
  render() {

    return (
      <div className="portback">
        <h2 id="portfolio">Portfolio</h2>
        <section className="portfolio">
          <div className="showcase">
            <Project
              to="/gedditdone"
              src="https://images.unsplash.com/photo-1584549239925-5554aa6b9183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              paragraph="This is an application that connects employers and job seekers. This app will allow the employers to view a list of services that job seekers provide."
              name="GedditDone"
            />
          </div>
          <div className="sidebyside">
            <div className="card">
              <Project
                to="/fitnesstracker"
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2768&q=80"
                name="Fitness Tracker"
                paragraph="This is a simple fitness tracker application."
              />
            </div>
            <div className="card">
              <Project
                to="/notetaker"
                src="https://images.unsplash.com/photo-1527345931282-806d3b11967f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80"
                name="Note Taker"
                paragraph="This application is a simple note taker that collects textual information and saves the data to an accessible api .json file."
              />
            </div>
          </div>
          <div className="sidebyside">
            <div className="card">
              <Project
                to="/ecommerce"
                src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
                name="Ecommerce Backend"
                paragraph="This application allows users to create a simple ecommerce database and use GET, POST, PUT, and DELETE methods to view and manipulate data."
              />
            </div>
            <div className="card">
              <Project
                to="/employeetracker"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
                name="Employee Tracker"
                paragraph="This application allows a user to interact with an employee database."
              />
            </div>
          </div>
          <div className="sidebyside">
            <div className="card">
              <Project
                to="/teamprofilegen"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
                name="Team Profile Generator"
                paragraph="This application generates Team Profiles including a name, role, employee ID, email, and additional information depending on different employees."
              />
            </div>
            <div className="card">
              <Project
                to="/readmegen"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2704&q=80"
                name="README Generator"
                paragraph="This is a simple README.md generator."
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
