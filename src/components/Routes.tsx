import { Route, Switch } from "wouter";
import Home from "../pages/Home";

import Contact from "../pages/Contact";
import NotFound from "./NotFound";
const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/resume">Resume</Route>
      <Route path="/about">Stuff I made</Route>
      <Route path="/projects">What can I do</Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/gallery">Random pictures I take</Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
