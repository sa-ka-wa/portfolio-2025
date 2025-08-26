import React from "react";
import styles from "./IntroSection.module.css";

const SoftwareIntro = () => {
  return (
    <section
      className={`${styles.intro} ${styles.softwareIntro}`}
      id="software"
    >
      <div className={styles.modelContainer} id="software-model">
        {/* TODO: Replace this placeholder with <canvas> for GSAP/Three.js */}
        <div className={styles.placeholder}>🖥️</div>
      </div>
      <div className={styles.text}>
        <h2 className={styles.blueTitle}>Software Engineering</h2>
        <p>
          I specialize in building scalable backend systems and interactive
          frontend applications. My expertise spans Python, Flask, React, and
          SQL, with a strong foundation in software architecture and API
          development. I enjoy solving complex problems and creating reliable
          solutions that power real-world applications.
        </p>
      </div>
    </section>
  );
};

export default SoftwareIntro;
