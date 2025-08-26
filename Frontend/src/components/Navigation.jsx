import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection, setActiveSection } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.navContainer}>
          <div className={styles.logo}>Portfolio</div>
          <div className={styles.navLinks}>
            <a
              href="#home"
              className={activeSection === "home" ? styles.active : ""}
              onClick={() => handleNavClick("home")}
            >
              Home
            </a>
            <a
              href="#software"
              className={activeSection === "software" ? styles.active : ""}
              onClick={() => handleNavClick("software")}
            >
              Software Engineering
            </a>
            <a
              href="#architecture"
              className={activeSection === "architecture" ? styles.active : ""}
              onClick={() => handleNavClick("architecture")}
            >
              Architecture
            </a>
            <a
              href="#contact"
              className={activeSection === "contact" ? styles.active : ""}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
