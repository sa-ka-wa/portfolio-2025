import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className={styles.socialLink}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className={styles.socialLink}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className={styles.socialLink}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className={styles.copyright}>
          © 2023 Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
