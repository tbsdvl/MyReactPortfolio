import React from "react";

// GedditDone project page component

function GedditDone() {
  return (
    <div className="gedditdone">
      <img src="./images/gedditdone.png" alt="gedditdone" />
      <h3>Description</h3>
      <p>This is an application that connects employers and job seekers. This app will allow the employers to view a list of services that job seekers provide. The employers may connect with the job seeker by the email provided on their service post. The job seekers will be able to create an account profile, which will include a current photo of themselves. This will help the employer to identify who they are hiring once they show up to the work location. The job seeker will complete a list of questions and fill out the type of service they provide. This will include job title, experience level, a list of skills, their contact email address, and the cost of the service either by task or per hour. The job seeker will also be able to select if their services are for residential, business, or both.</p>
      <p>
        Link to GitHub repository: <a href="https://github.com/tbsdvl/GedditDone" rel="noreferrer" target="_blank">GedditDone Repo</a>
      </p>
      <p>
        Link to deployed application: <a href="https://gedditdone.herokuapp.com/" rel="noreferrer" target="_blank">GedditDone</a>
      </p>
    </div>
  );
}

export default GedditDone;
