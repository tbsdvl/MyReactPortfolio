import React from "react";

function ReadmeGen() {
  return (
    <div className="readmegen">
      <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" alt="readmegen" />
      <h3>Description</h3>
      <p>This is a simple README.md generator. It will collect a user's inputs in the command line and write the inputs' text to a markdown file. The application is built to save time for GitHub users who need a quick alternative for writing a README file for their repositories. This application is designed to save time creating README files and displaying them in a GitHub repository.
      </p>
      <p>
        Link to GitHub repository: <a href="https://github.com/tbsdvl/MyREADMEGenerator" rel="noreferrer" target="_blank">README Generator Repo</a>
      </p>
    </div>
  );
}

export default ReadmeGen;