import { AiFillGithub } from "react-icons/ai";

interface props {
  title: string;
  link: string;
  image: string;
  github: string;
}

const ProjectCard = () => {
  return (
    <a
      href="https://i.imgur.com/Bl0jjby.jpeg"
      className="relative text-white flex flex-col w-full max-w-[250px] h-[300px] max-h-[300px] p-4 rounded-md cursor-pointer hover:scale-125 duration-200 ease-in-out"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-red-500 -z-50 rounded-md overflow-hidden brightness-50">
        <img
          src="https://i.imgur.com/Bl0jjby.jpeg"
          className="h-full w-full block aspect-auto"
        />
      </div>
      <div className="flex justify-between mt-auto">
        <div className="text-lg">Idolmaster Api</div>
        <div className="flex gap-2 items-center text-3xl">
          <a
            href="https://www.google.com/"
            className="hover:text-blue-500 ease-in duration-200"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </a>
  );
};
export default ProjectCard;
