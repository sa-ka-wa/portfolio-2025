// import React from "react";
// import styles from "./IntroSection.module.css";

// const SoftwareIntro = () => {
//   return (
//     <section
//       className={`${styles.intro} ${styles.softwareIntro}`}
//       id="software"
//     >
//       <div className={styles.modelContainer} id="software-model">
//         {/* TODO: Replace this placeholder with <canvas> for GSAP/Three.js */}
//         <div className={styles.placeholder}>🖥️</div>
//       </div>
//       <div className={styles.text}>
//         <h2 className={styles.blueTitle}>Software Engineering</h2>
//         <p>
//           I specialize in building scalable backend systems and interactive
//           frontend applications. My expertise spans Python, Flask, React, and
//           SQL, with a strong foundation in software architecture and API
//           development. I enjoy solving complex problems and creating reliable
//           solutions that power real-world applications.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default SoftwareIntro;
import React, { useState } from "react";
import styles from "./SoftwareIntro.module.css";

const SoftwareIntro = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className={styles.softwareIntro} id="software">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Software Engineering Expertise</h2>
          <p className={styles.subtitle}>
            Full-stack developer with focus on scalable systems and intuitive
            user experiences
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.modelContainer} id="software-model">
            <div className={styles.canvasPlaceholder}>
              <div className={styles.techSphere}>
                <div className={styles.orbitingTech}>
                  <span className={styles.techItem}>React</span>
                  <span className={styles.techItem}>Python</span>
                  <span className={styles.techItem}>Node.js</span>
                  <span className={styles.techItem}>SQL</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.details}>
            <div className={styles.tabNavigation}>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "skills" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Technical Skills
              </button>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "experience" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "education" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === "skills" && (
                <div className={styles.skillsGrid}>
                  <div className={styles.skillCategory}>
                    <h3>Frontend Development</h3>
                    <ul>
                      <li>React.js & Next.js</li>
                      <li>JavaScript (ES6+) & TypeScript</li>
                      <li>HTML5 & CSS3/SASS</li>
                      <li>Redux & Context API</li>
                      <li>Webpack & Vite</li>
                    </ul>
                  </div>

                  <div className={styles.skillCategory}>
                    <h3>Backend Development</h3>
                    <ul>
                      <li>Python (Flask, Django)</li>
                      <li>Node.js & Express</li>
                      <li>REST & GraphQL APIs</li>
                      <li>Authentication (JWT, OAuth)</li>
                      <li>Microservices Architecture</li>
                    </ul>
                  </div>

                  <div className={styles.skillCategory}>
                    <h3>Database Management</h3>
                    <ul>
                      <li>PostgreSQL & MySQL</li>
                      <li>MongoDB & NoSQL</li>
                      <li>Database Design & Optimization</li>
                      <li>Redis Caching</li>
                      <li>ORM (Sequelize, SQLAlchemy)</li>
                    </ul>
                  </div>

                  <div className={styles.skillCategory}>
                    <h3>DevOps & Tools</h3>
                    <ul>
                      <li>Git & GitHub Actions</li>
                      <li>Docker & Containerization</li>
                      <li>AWS & Cloud Services</li>
                      <li>CI/CD Pipelines</li>
                      <li>Testing (Jest, Cypress)</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div className={styles.experienceList}>
                  <div className={styles.experienceItem}>
                    <div className={styles.experienceHeader}>
                      <h3>Senior Full-Stack Developer</h3>
                      <span className={styles.date}>2021 - Present</span>
                    </div>
                    <p className={styles.company}>Tech Innovations Inc.</p>
                    <ul>
                      <li>
                        Led development of a SaaS platform serving 50k+ users,
                        improving performance by 40%
                      </li>
                      <li>
                        Architected microservices backend handling 1M+ daily API
                        requests
                      </li>
                      <li>
                        Mentored junior developers and established coding
                        standards
                      </li>
                      <li>
                        Implemented CI/CD pipeline reducing deployment time by
                        65%
                      </li>
                    </ul>
                  </div>

                  <div className={styles.experienceItem}>
                    <div className={styles.experienceHeader}>
                      <h3>Software Engineer</h3>
                      <span className={styles.date}>2018 - 2021</span>
                    </div>
                    <p className={styles.company}>Data Solutions Group</p>
                    <ul>
                      <li>
                        Developed data visualization tools used by Fortune 500
                        companies
                      </li>
                      <li>
                        Optimized database queries improving response times by
                        30%
                      </li>
                      <li>
                        Created RESTful APIs for internal and external
                        consumption
                      </li>
                      <li>
                        Collaborated with UX team to implement responsive
                        designs
                      </li>
                    </ul>
                  </div>

                  <div className={styles.experienceItem}>
                    <div className={styles.experienceHeader}>
                      <h3>Junior Developer</h3>
                      <span className={styles.date}>2016 - 2018</span>
                    </div>
                    <p className={styles.company}>WebStart Agency</p>
                    <ul>
                      <li>
                        Built custom WordPress themes and plugins for clients
                      </li>
                      <li>Developed e-commerce solutions with WooCommerce</li>
                      <li>Maintained and updated legacy codebases</li>
                      <li>
                        Assisted in project management and client communications
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <div className={styles.educationList}>
                  <div className={styles.educationItem}>
                    <div className={styles.educationHeader}>
                      <h3>MSc in Computer Science</h3>
                      <span className={styles.date}>2014 - 2016</span>
                    </div>
                    <p className={styles.institution}>Stanford University</p>
                    <p className={styles.details}>
                      Specialized in Distributed Systems and Machine Learning
                    </p>
                  </div>

                  <div className={styles.educationItem}>
                    <div className={styles.educationHeader}>
                      <h3>BSc in Software Engineering</h3>
                      <span className={styles.date}>2010 - 2014</span>
                    </div>
                    <p className={styles.institution}>MIT</p>
                    <p className={styles.details}>
                      Graduated Summa Cum Laude with focus on Web Technologies
                    </p>
                  </div>

                  <div className={styles.certifications}>
                    <h3>Certifications</h3>
                    <ul>
                      <li>AWS Certified Solutions Architect (2022)</li>
                      <li>Google Cloud Professional Developer (2021)</li>
                      <li>React Advanced Patterns (2020)</li>
                      <li>Python for Data Structures and Algorithms (2019)</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.ctaSection}>
              <button className={styles.ctaButton}>Download Full CV</button>
              <button className={styles.secondaryButton}>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareIntro;
