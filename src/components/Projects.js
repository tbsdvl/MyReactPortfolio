import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {

    render() {
        return (
        <section>
        <Project to="/GedditDone" src="https://images.unsplash.com/photo-1584549239925-5554aa6b9183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" paragraph="sometext"/>
        <div>
        <Project to="/EmployeeTracker" src="https://images.unsplash.com/photo-1506818144585-74b29c980d4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" paragraph="sometext"/>
        </div>
        </section>
        );
    }
}

export default Projects;