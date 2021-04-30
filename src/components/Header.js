import React, { Component } from "react";
import Nav from './Nav';

// Render the site's header inside the master header div

class Header extends Component {
  render() {
    return (
        <header className="header">
          <h1>Triston Burns</h1>
          <img id="gif" src="./images/spacedog.gif" height="15%" alt="spacedog"/>
          <Nav />
        </header>
    );
  }
}

export default Header;