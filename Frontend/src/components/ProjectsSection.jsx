import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsSection.module.css";

const ProjectsSection = ({ type = "software" }) => {
  // Sample data - replace with your actual projects
  const softwareProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "API Integration Framework",
      description:
        "A middleware solution for seamless third-party API integrations.",
      tech: ["Python", "FastAPI", "Redis"],
      link: "#",
    },
  ];

  const architectureProjects = [
    {
      title: "Modern Residence Design",
      description:
        "A contemporary home design with sustainable materials and open spaces.",
      tech: ["Residential", "Sustainable", "Modern"],
      link: "#",
    },
    {
      title: "Commercial Complex",
      description:
        "A mixed-use development with retail, office, and public spaces.",
      tech: ["Commercial", "Mixed-use", "Urban"],
      link: "#",
    },
    {
      title: "Cultural Center",
      description:
        "A public cultural center designed to promote arts and community engagement.",
      tech: ["Public", "Cultural", "Innovative"],
      link: "#",
    },
  ];

  const projects =
    type === "software" ? softwareProjects : architectureProjects;
  const sectionId = type === "software" ? "software" : "architecture";

  return (
    <section
      id={sectionId}
      className={
        type === "architecture"
          ? styles.architectureSection
          : styles.softwareSection
      }
    >
      <div className="container">
        <h2 className={styles.sectionTitle}>
          {type === "software" ? (
            <span className={styles.blueTitle}>
              Software Engineering Projects
            </span>
          ) : (
            <span className={styles.orangeTitle}>Architecture Projects</span>
          )}
        </h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} type={type} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
