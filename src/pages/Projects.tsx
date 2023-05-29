import ProjectCard from "../components/Projects/ProjectCard";

ProjectCard;
const Projects = () => {
  return (
    <div className="flex flex-col gap-y-5 justify-center w-full h-full py-16 pl-24">
      <h1 className="text-5xl">Stuff that I made</h1>
      <div className="flex gap-5">
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
