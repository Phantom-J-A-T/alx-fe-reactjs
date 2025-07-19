function Projects({ projects }) {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <img src={project.image} alt={project.name} style={{ width: '100px', height: '100px' }} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;