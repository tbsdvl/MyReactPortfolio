import React from "react";

// Fitness Tracker project page component

function FitnessTracker() {
  return (
    <div className="fitnesstracker">
      <img src="./images/fitnesstracker.png" alt="fitnesstracker" />
      <h3>Description</h3>
      <p>This is a simple fitness tracker application. A user may add a new exercise with some data and keep track of
          their exercise routine. Multiple exercises' times are totaled to show the user the duration of their routine.
      </p>
      <p>
        Link to GitHub repository: <a href="https://github.com/tbsdvl/MyFitnessTracker" rel="noreferrer" target="_blank">Fitness Tracker Repo</a>
      </p>
      <p>
        Link to deployed application: <a href="https://vast-everglades-53374.herokuapp.com/" rel="noreferrer" target="_blank">Fitness Tracker</a>
      </p>
    </div>
  );
}

export default FitnessTracker;
