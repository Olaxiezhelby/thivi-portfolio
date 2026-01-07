import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "MediLife Hospital Lab Report System",
      description:
        "A web-based system designed to manage and display hospital lab reports efficiently.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Butterfly Brownies Website",
      description:
        "A responsive business website created to showcase products and branding.",
      tech: "HTML, Bootstrap, JavaScript",
    },
    {
      title: "Harmonify – Mood Based Music App",
      description:
        "A concept application that recommends music based on user mood.",
      tech: "JavaScript, UI Concepts",
    },
    {
      title: "Personal React Portfolio",
      description:
        "My personal portfolio built using React to showcase my skills and projects.",
      tech: "React, JavaScript",
    },
  ];

  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          tech={project.tech}
        />
      ))}
    </section>
  );
}

export default Projects;
