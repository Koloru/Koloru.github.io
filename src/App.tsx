
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes";

function App() {
	return (
		<div className='h-full w-full  font-lato text-main relative'>
			<a
				className='absolute right-10 top-6 font-light text-main text-xs tracking-widest'
				href='mailto:koloru@koloru.dev'
			>
				Email me at
				<br />
				<span className='font-bold'>Koloru@koloru.dev</span>
			</a>
			<div className='h-full flex'>
				<Navbar />
				<div className='h-full flex-1 flex items-center p-4 overflow-y-auto'>
					<Routes />
				</div>
			</div>
		</div>
	);
}

export default App;
