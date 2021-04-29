import React from "react";

function TeamProf() {
  return (
    <div className="teamprof">
      <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" alt="teamprof" />
      <h3>Description</h3>
      <p>This application generates Team Profiles including a name, role, employee ID, email, and additional information depending on different employees. For Team Managers, the profile will display an additional office number. For Engineers, the profile will display an additional link to their own GitHub profile. For Interns, the profile will display an additional school they attended/are attending. The user may download these files and install npm to use this application. To run the application, run "node index.js" inside your terminal.
      </p>
      <p>
        Link to GitHub repository: <a href="https://github.com/tbsdvl/MyTeamProfileGenerator" rel="noreferrer" target="_blank">Team Profile Generator Repo</a>
      </p>
    </div>
  );
}

export default TeamProf;