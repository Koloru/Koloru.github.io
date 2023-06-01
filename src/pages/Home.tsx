import profilePic from "../assets/kita.png";
import { useResponsive } from "../utils/useResponsive";
import Projects from "./Projects";

const Home = () => {
  const { isMobile } = useResponsive();
  return (
    <>
      <div className="flex flex-col gap-y-5 items-center lg:items-start lg:justify-center w-full h-full lg:py-16 lg:pl-24 text-center lg:text-left">
        {isMobile ? (
          <div className="w-full px-14 flex items-end">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="w-full rounded-md hover:-rotate-12 duration-200 ease-in"
            />
          </div>
        ) : (
          <></>
        )}
        <h1 className="text-5xl lg:text-7xl font-bold tracking-wider">
          {isMobile ? (
            <div>
              Koloru <div className="text-2xl font-light">Neil</div>
            </div>
          ) : (
            <p>Koloru / Neil</p>
          )}
        </h1>
        <p className=" text-gray2 lg:pl-1">
          Frontend Developer -{" "}
          <span className="font-bold text-main">Manila, Philippines</span>
        </p>
        <p className="text-gray2 font-light pl-1 w-full lg:w-3/4 lg:text-left leading-loose">
          I'm a<span className="font-bold text-main mx-1">WEB DEVELOPER</span>{" "}
          who seeks novel solutions to novel problems. Knowledge hungry and
          loves learning new things, I can help you build your ideas to life.
          <span className="block mt-3 lg:mt-6">
            I also like dogs and taking pictures of random places
          </span>
        </p>
        <a
          href="https://resume.koloru.dev/"
          target="_blank"
          className="border-2 w-fit p-1 px-6 font-bold ml-1 text-center hover:border-main hover:text-white hover:bg-main hover:opacity-70"
        >
          My Resume
        </a>
      </div>

      {isMobile ? (
        <>
          <Projects />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
