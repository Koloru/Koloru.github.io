import { Route } from "wouter";
import Home from '../pages/Home'

const Routes = () => {
	return (
		<>
			<Route path='/'>
				<Home />
			</Route>
			<Route path='/resume'>Resume</Route>
			<Route path='/about'>What can I do</Route>
			<Route path='/projects'>Stuff I built</Route>
			<Route path='/contact'>Reach out</Route>
		</>
	);
};

export default Routes;
