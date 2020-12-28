import React, { Component, Fragment } from "react";
import ErrorBoundary from './components/layout/ErrorBoundary';
import AppBar from "./components/layout/AppBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./components/layout/Register";
import Login from "./components/layout/Login";
import Dashboard from "./components/layout/Dashboard";
import RestaurantBar from "./components/layout/RestaurantBar";
import HelpPage from "./components/layout/HelpPage"
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import Reception from "./components/layout/Reception";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <Router>
            <AppBar />
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/restaurant" component={RestaurantBar} exact />
            <Route path="/reception" component={Reception} exact />
            <Route path="/help" component={HelpPage} exact />
          </Router>
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default App;
