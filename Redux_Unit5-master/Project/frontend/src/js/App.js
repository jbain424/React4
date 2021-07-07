import React, { Component } from "react";
// import { Route, Switch, withRouter } from "react-router-dom";
// import { matchPath } from "react-router";

import { Main, NavBar } from "./components";

export default class App extends Component {
  state = {
    user: "",
    boards: [],
    pins: []
  };
  render() {
    return (
      <>
        <h1>
          <NavBar />
          <Main />
        </h1>
      </>
    );
  }
}
