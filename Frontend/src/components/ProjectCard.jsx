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

        {/* Tech stack */}
        <div className={styles.projectTech}>
          {project.tech.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className={styles.projectLinks}>
          {/* View Project page (opens in same tab) */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            View Project <i className="fas fa-arrow-right"></i>
          </a>

          {/* GitHub repo (opens in new tab) */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectGithub}
            >
              GitHub <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
