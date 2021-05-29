import React from "react";

// Employee Tracker project page component

function EmployeeTracker() {
  return (
    <div className="employeetracker">
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" alt="employeetracker" />
      <h3>Description</h3>
      <p>This application allows a user to interact with an employee database. A user may add a new department, role, and employee to the database; view employees by department or role; update employee roles.

      Technologies: JavaScript, Node.js, MySQL
      Skills: Use relational database design to build tables containing employee data, code routing logic to retrieve, 
      add, update, and delete records. 
      </p>
      <p>
        Link to GitHub repository: <a href="https://github.com/tbsdvl/MyEmployeeTracker" rel="noreferrer" target="_blank">Employee Tracker Repo</a>
      </p>
    </div>
  );
}

export default EmployeeTracker;