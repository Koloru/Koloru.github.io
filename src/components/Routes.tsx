import { Route, Switch } from "wouter";
import { useResponsive } from "../utils/useResponsive";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import NotFound from "./NotFound";

const Routes = () => {
  const { isMobile } = useResponsive();
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      {!isMobile && (
        <>
          <Route path="/projects">
            <Projects />
          </Route>
        </>
      )}
      {/* <Route path="/gallery">
        <Gallery />
      </Route> */}
      {/* <Route path="/gallery/:id">
        <Gallery />
      </Route> */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
