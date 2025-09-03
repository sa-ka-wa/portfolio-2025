import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <span className={styles.brand}>
            <span style={{ color: "#2196f3" }}>DevArch</span>
            <span style={{ color: "#ff9800" }}>Sphere</span>
          </span>
          <span className={styles.copyright}>
            © 2024 DevArchSphere. Bridging Code & Design.
          </span>
        </div>
        <div className={styles.right}>
          <a
            href="https://github.com/sa-ka-wa"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-wainaina-98290b210/"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
          <a
            href="mailto:samiekaranjawainaina@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
