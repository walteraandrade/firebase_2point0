import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./Pages/dashboard.page";
import { Home } from "./Pages/home.page";
import { Login } from "./Pages/login.page";
import { SignUp } from "./Pages/singup.page";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
};
