function ProjectsGrid({ title, data, fadeIn }) {
  return (
    <>
      {title ? (
        <>
          <h2>{title}</h2>
          <br />
          <br />
        </>
      ) : null}
      <div className={fadeIn ? "projects-grid section" : "projects-grid"}>
        {data.map((item, i) => {
          return (
            <div className="g-item">
              <a className="a-nostyle" href={item.link} target="_blank">
                <h3 className="project-title">{item.title}</h3>
                {item.img}
                <p className="project-bio">{item.bio}</p>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectsGrid;
