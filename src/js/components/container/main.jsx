/*
    File: main.jsx
    Author: Patrick Galicia
    Desc: Responsible for switching the view based on the path
*/

// Imports
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./_home.jsx";

const Main = props => {
  return (
    <main id="main">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );
};

export default Main;
