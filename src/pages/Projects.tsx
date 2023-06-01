import ProjectCard from "../components/Projects/ProjectCard";
import projects from "../data/projects.json";

ProjectCard;
const Projects = () => {
  return (
    <div className="flex flex-col gap-y-5 items-center lg:items-start lg:justify-center w-full h-full lg:py-16 lg:pl-24 lg:mt-0 mt-12 ">
      <h1 className="mb-4 text-4xl md:text-5xl md:text-left text-center ">
        Stuff that I made
      </h1>
      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 w-full lg:max-w-[80%] ">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
