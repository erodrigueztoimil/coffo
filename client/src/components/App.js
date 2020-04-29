import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import "../assets/css/main.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>MERN Stack App</h1>
        {/* <Router>
          <Navigation />

          <Route exact path="/" component={EmployeeDashboard} />
          <Route path="/manager" component={ManagerDashboard} />
        </Router> */}
      </div>
    );
  }
}
