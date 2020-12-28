import React from "react";
import "./Content.css";

import { Switch, Route } from "react-router-dom";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";

export default (props) => {
  return (
    <main className="Content">
      <SwitchForm />
    </main>
  );
};

const SwitchForm = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
