import { Link, Route, Router, Switch } from "wouter";
import cx from "classnames";

import "./App.css";

import Construction from "./pages/Construction";

function App() {
	const construction = true;
	return (
		<div className={cx("h-screen", !construction && "bg-gray-800 p-4")}></div>
	);
}

export default App;
