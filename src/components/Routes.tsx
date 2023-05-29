import { Route, Switch } from "wouter";
import Home from "../pages/Home";

import Projects from "../pages/Projects";
import NotFound from "./NotFound";
const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/resume">Resume</Route>
      <Route path="/projects"><Projects /></Route>
      <Route path="/gallery">Random pictures I take</Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
