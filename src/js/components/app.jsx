/*
    File: app.jsx
    Author: Patrick Galicia
    Desc: Base react file
*/

// Imports
import React, { Component } from "react";
import "./../../scss/index.scss";
import Main from "./container/main.jsx";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
