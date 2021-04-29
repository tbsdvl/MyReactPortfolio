import React from "react";

function Ecommerce() {
  return (
    <div className="ecommerce">
      <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" alt="ecommerce" />
      <h3>Description</h3>
      <p>This application allows users to create a simple ecommerce database and use GET, POST, PUT, and DELETE methods to view and manipulate data. The express server interacts with the MySQL database using sequelize models that represent fields and records in the tables. Fields and records are returned as json objects containing field keys and record data.
      </p>
      <p>
        Link to GitHub repository: <a href="https://github.com/tbsdvl/MyEcommerceBackEnd" rel="noreferrer" target="_blank">Ecommerce Backend Repo</a>
      </p>
    </div>
  );
}

export default Ecommerce;