import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/sign_up">
            <SignUp />
        </Route>
    </Switch>
  );
}


