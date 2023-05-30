import { AiFillGithub } from "react-icons/ai";

interface props {
  title: string;
  link: string;
  image: string;
  github: string;
}

const ProjectCard = ({ title, link, image, github }: props) => {
  return (
    <a
      href={link}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.2867121848739496) 0%, rgba(0,0,0,0.3474964985994398) 100%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="group relative text-white shadow-lg flex flex-col w-full max-w-[250px] h-[300px] max-h-[300px] p-4 rounded-md cursor-pointer hover:scale-105 duration-200 ease-in-out"
    >
      <div className="flex justify-between mt-auto">
        <div className="duration-200 ease-in-out origin-left -rotate-90 opacity-0 text-md group-hover:rotate-0 group-hover:opacity-100">
          {title}
        </div>
        <div className="flex items-center gap-2 text-3xl transition-all duration-200 ease-in-out -translate-y-32 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          <a href={github} className="duration-200 ease-in hover:text-blue-500">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </a>
  );
};
export default ProjectCard;
