import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="relative h-full w-full font-lato text-main">
      <a
        className="absolute right-10 top-6 text-xs font-light tracking-widest text-main"
        href="mailto:koloru@koloru.dev"
      >
        Email me at
        <br />
        <span className="font-bold">Koloru@koloru.dev</span>
      </a>
      <div className="flex h-full">
        <Navbar />
        <div className="flex h-full flex-1 items-center overflow-y-auto p-4">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
