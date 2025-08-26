import React from "react";
import styles from "./IntroSection.module.css";

const ArchitectureIntro = () => {
  return (
    <section
      className={`${styles.intro} ${styles.archIntro}`}
      id="architecture"
    >
      <div className={styles.text}>
        <h2 className={styles.orangeTitle}>Architecture</h2>
        <p>
          With a background in architecture, I blend creativity and structure to
          design meaningful spaces. My focus is on sustainable design, landscape
          architecture, and digital tools that allow clients to visualize their
          projects in innovative ways. I bring an eye for detail and
          functionality to every project I take on.
        </p>
      </div>
      <div className={styles.modelContainer} id="arch-model">
        {/* This will be replaced by the Three.js canvas */}
        <div className={styles.placeholder}>🏛️</div>
      </div>
    </section>
  );
};

export default ArchitectureIntro;
