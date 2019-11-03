/*
    File: _home.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the homepage
    Path: /
*/

// Imports
import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <h1 id="home">Hello World</h1>
        <button>Click Me</button>
      </React.Fragment>
    );
  }
}

export default Home;
