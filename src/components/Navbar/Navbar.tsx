import profilePic from "../../assets/atsuko.jpg";
import NavLink from "./NavLink";
import NavSocials from "./NavSocials";

const Navbar = () => {
  return (
    <div className="my-auto relative flex flex-col items-center gap-12 text-main">
      <div className="absolute right-0 top-[40%] w-[3px] h-40 bg-main rounded-full"></div>

      {/* Profile */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-96 px-14 flex items-end">
          <img
            src={profilePic}
            alt="Profile Picture"
            className="w-full rounded-md"
          />
        </div>
        <h1 className="text-4xl tracking-widest font-bold uppercase">Koloru</h1>
        <p className="font-light text-sm">
          I'm jealous of the things people create
        </p>
        {/* Navlinks */}
        <div className="block bg-main w-[25px] h-[1px] mt-4"></div>
        <ul className="flex flex-col gap-4 text-center w-3/5 mt-8 ">
          <NavLink text="Home" url="/" />
          <NavLink text="My Resume" url="https://resume.koloru.dev/" />
          <NavLink text="Stuff I made" url="about" />
          <NavLink text="Stuff I'm Learning" url="projects" />
          <NavLink text="React out" url="contact" />
          <NavLink text="Random pictures I take" url="gallery" />
        </ul>
      </div>
			<NavSocials />

    </div>
  );
};

export default Navbar;
