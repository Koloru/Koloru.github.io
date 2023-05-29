import ProjectCard from "../components/Projects/ProjectCard";

ProjectCard;
const Projects = () => {
  return (
    <div className="flex flex-col gap-y-5 justify-center w-full h-full py-16 pl-24">
      <h1 className="text-5xl mb-4">Stuff that I made</h1>
      <div className="flex flex-wrap items-center gap-6 max-w-[80%]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
export default Projects;
