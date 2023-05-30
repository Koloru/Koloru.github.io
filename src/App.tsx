import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes";


function App() {
  return (
    <div className="relative w-full h-full font-lato text-main">
      <a
        className="absolute text-xs font-light tracking-widest right-10 top-6 text-main"
        href="mailto:koloru@koloru.dev"
      >
        Email me at
        <br />
        <span className="font-bold">Koloru@koloru.dev</span>
      </a>
      <div className="flex h-full">
        <Navbar />
        <div className="flex items-center flex-1 h-full p-4 overflow-y-auto">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
