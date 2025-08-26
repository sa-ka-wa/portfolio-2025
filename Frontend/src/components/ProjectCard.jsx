import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, type = "software" }) => {
  return (
    <div
      className={`${styles.projectCard} ${
        type === "architecture" ? styles.architecture : ""
      }`}
    >
      <div className={styles.projectImg}></div>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>
        <div className={styles.projectTech}>
          {project.tech.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link} className={styles.projectLink}>
          View Project <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
