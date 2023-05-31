import profilePic from "../../assets/kita.png";
import NavLink from "./NavLink";
import NavSocials from "./NavSocials";

const Navbar = () => {
  return (
    <div className="max-w-[25%] my-auto relative flex flex-col items-center gap-12 text-main">
      <div className="absolute right-0 top-[40%] w-[3px] h-40 bg-main rounded-full"></div>

      {/* Profile */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-96 px-14 flex items-end">
          <img
            src={profilePic}
            alt="Profile Picture"
            className="w-full rounded-md hover:-rotate-12 duration-200 ease-in"
          />
        </div>
        <h1 className="text-4xl tracking-widest font-bold uppercase">Koloru</h1>
        <p className="font-light text-sm max-w-[55%] max-h-48 text-center overflow-y-hidden">
          Frontend Developer who likes to take random pictures
        </p>
        {/* Navlinks */}
        <div className="block bg-main w-[25px] h-[1px] mt-4"></div>
        <ul className="flex flex-col gap-4 text-center w-3/5 mt-4 ">
          <NavLink text="Home" url="/" />
          <NavLink text="Stuff I made" url="projects" />
          <NavLink text="Gallery" url="gallery" />
          <NavLink text="My Resume" url="https://resume.koloru.dev/" />
        </ul>
      </div>
      <NavSocials />
    </div>
  );
};

export default Navbar;
