import React from "react";
import styles from "./Hero3D.module.css";

const Hero3D = () => {
  const handleButtonClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Software Engineer & Architect</h1>
          <p className={styles.heroDescription}>
            Creating innovative digital solutions and architectural designs that
            blend form and function for a better tomorrow.
          </p>
          <div className={styles.heroButtons}>
            <button
              className={styles.btnPrimary}
              onClick={() => handleButtonClick("software")}
            >
              Software Projects
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => handleButtonClick("architecture")}
            >
              Architecture Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
