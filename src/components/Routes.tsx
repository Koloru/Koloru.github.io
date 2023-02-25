import { Route } from "wouter";

const Routes = () => {
	return (
		<>
			<Route path='/'>Hello</Route>
			<Route path='/resume'>Resume</Route>
			<Route path='/about'>What can I do</Route>
			<Route path='/projects'>Stuff I built</Route>
			<Route path='/contact'>Reach out</Route>
		</>
	);
};

export default Routes;
