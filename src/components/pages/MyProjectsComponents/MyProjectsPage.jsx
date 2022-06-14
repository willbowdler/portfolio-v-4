import ProjectsGrid from "./ProjectsGrid";
import { ProjectsData } from "./ProjectsData";
import { TutorialData } from "./TutorialData";

function MyProjectsPage({}) {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <br />
      <ProjectsGrid data={ProjectsData} title={"Personal Projects"} />
      <div className="seperator-2"></div>
      <ProjectsGrid data={TutorialData} title={"Tutorial Projects"} />
    </div>
  );
}

export default MyProjectsPage;
