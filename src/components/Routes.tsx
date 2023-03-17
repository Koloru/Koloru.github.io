import { Route, Switch } from "wouter";
import Home from "../pages/Home";

import NotFound from "./NotFound";
const Routes = () => {
	return (
		<Switch>
			<Route path='/'>
				<Home />
			</Route>
			<Route path='/resume'>Resume</Route>
			<Route path='/about'>What can I do</Route>
			<Route path='/projects'>Stuff I learned</Route>
			<Route path='/contact'>Reach out</Route>
			<Route path='/gallery'>Random pictures I take</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
};

export default Routes;
