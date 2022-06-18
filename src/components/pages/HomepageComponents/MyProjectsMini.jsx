import { ProjectsData } from "../MyProjectsComponents/ProjectsData";
import ProjectsGrid from "../MyProjectsComponents/ProjectsGrid";

function MyProjectsMini() {
  return (
    <div className="hp-section">
      <h1 className="subheader">My Projects</h1>
      <div className="seperator"></div>
      {/* <div className="projects-grid">
        {ProjectsData.map((item) => {
          return (
            <div className="g-item">
              <h3 className="project-title">{item.title}</h3>
              {item.img}
              <p className="project-bio">{item.bio}</p>
            </div>
          );
        })}
      </div> */}
      <ProjectsGrid data={ProjectsData} />
    </div>
  );
}

export default MyProjectsMini;
