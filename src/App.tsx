import cx from "classnames";

import "./App.css";

import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
	const construction = false;
	return (
		<div className={cx("h-full font-lato text-main relative")}>
			<a
				className='absolute right-10 top-6 font-light text-main text-xs tracking-widest'
				href='mailto:koloru@koloru.dev'
			>
				Email me at
				<br />
				<strong>Koloru@koloru.dev</strong>
			</a>
			<div className='flex'>
				<Navbar />
				<div className='h-screen flex-1 flex items-center p-4 overflow-y-auto'>
					<Routes />
				</div>
			</div>
		</div>
	);
}

export default App;
