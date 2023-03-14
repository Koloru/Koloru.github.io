import cx from "classnames";

import "./App.css";

import Construction from "./pages/Construction";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
	const construction = false;
	return (
		<div className={cx("h-screen font-lato text-main relative")}>
			{construction ? (
				<Construction />
			) : (
				<div className='flex'>
					<div className='h-screen w-[15px] z-50 bg-main absolute text-main'></div>
					<div className='h-screen w-[15px] z-50 bg-main absolute right-0 text-main'></div>
					<div className='w-screen h-[15px] bg-gray absolute text-main'></div>
					<div className='w-screen h-[15px] bg-gray absolute bottom-0 text-main'></div>
					<Navbar />
					<div className='flex-1 flex items-center p-4'>
						<Routes />
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
