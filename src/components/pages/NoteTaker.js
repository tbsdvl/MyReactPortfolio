import React from "react";

// Note Taker project page component

function NoteTaker() {
  return (
    <div className="notetaker">
      <img src="./images/notetaker.png" alt="notetaker" />
      <h3>Description</h3>
      <p>This application is a simple note taker that collects textual information and saves the data to an accessible api .json file. A user may enter the note taking page from the home page and begin quickly taking notes inside the text editor. To save your note, click on the cartridge icon at the top right after you complete the note in its entirety. Then, your note will be saved. You may begin a new note by clicking the pencil and notepad icon next to the cartridge icon.

      Technologies: JavaScript, Node.js, Express.js
      Skills: Route GET, POST, UPDATE, and DELETE routes between app and Express.js server, transfer JSON data between client and server, code SQL queries to populate and collect user's notes. 
      </p>
      <p>
        Link to GitHub repository: <a href="https://github.com/tbsdvl/MyNoteTaker" rel="noreferrer" target="_blank">Note Taker Repo</a>
      </p>
      <p>
        Link to deployed application: <a href="https://mynotetakertcb.herokuapp.com/" rel="noreferrer" target="_blank">Note Taker</a>
      </p>
    </div>
  );
}

export default NoteTaker;