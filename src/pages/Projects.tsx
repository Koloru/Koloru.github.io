import ProjectCard from "../components/Projects/ProjectCard";
import projects from "../data/projects.json";

ProjectCard;
const Projects = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full py-16 pl-24 gap-y-5">
      <h1 className="mb-4 text-5xl">Stuff that I made</h1>
      <div className="flex flex-wrap items-center gap-4 max-w-[80%] ">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
