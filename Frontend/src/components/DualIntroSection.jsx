import React from "react";
import styles from "./DualIntroSection.module.css";

const DualIntroSection = () => {
  return (
    <section className={styles.dualIntro}>
      <div className={styles.container}>
        {/* Left side - Software Engineering */}
        <div className={styles.column}>
          <h2 className={styles.blueTitle}>Software Engineering</h2>
          <p>
            I specialize in building scalable backend systems and interactive
            frontend applications. My expertise spans Python, Flask, React, and
            SQL, with a strong foundation in software architecture and API
            development. I enjoy solving complex problems and creating reliable
            solutions that power real-world applications.
          </p>
        </div>

        {/* Right side - Architecture */}
        <div className={styles.column}>
          <h2 className={styles.orangeTitle}>Architecture</h2>
          <p>
            With a background in architecture, I blend creativity and structure
            to design meaningful spaces. My focus is on sustainable design,
            landscape architecture, and digital tools that allow clients to
            visualize their projects in innovative ways. I bring an eye for
            detail and functionality to every project I take on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DualIntroSection;
