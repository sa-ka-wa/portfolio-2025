import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsSection.module.css";

const ProjectsSection = ({ type = "software" }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Enhanced sample data with more details
  const softwareProjects = [
    {
      //  const softwareProjects = [

      id: 1,
      title: "Hope Haven – Children’s Home Platform",
      description:
        "A donations and sponsorship platform for children’s homes with dashboards for donors, caregivers, and admins.",
      detailedDescription:
        "Built with ReactJS (frontend), Flask + PostgreSQL (backend), JWT authentication, and CI/CD with GitHub Actions. Features role-based dashboards, donation tracking, sponsorships, and volunteer management.",
      tech: ["React", "Redux Toolkit", "Flask", "PostgreSQL", "JWT", "CI/CD"],
      link: "https://hope-haven-orphanage.netlify.app/",
      github: "https://github.com/Johnkamau106/phase-5-project/tree/main",
      status: "Completed",
      year: 2025,
      category: "fullstack",
      image: "/images/projects/hope-haven.png",
      featured: true,
    },
    {
      id: 2,
      title: "Construction Site Manager",
      description:
        "A real-time material and task tracking system for construction sites.",
      detailedDescription:
        "Provides role-based dashboards for supervisors, workers, and admins. Tracks materials received, used, and remaining. Includes low-stock alerts, phased procurement, and PDF/Excel reporting.",
      tech: ["React", "Flask", "PostgreSQL", "WebSockets"],
      link: "https://cypher-architects.vercel.app",
      github: "https://github.com/sa-ka-wa/Cypher-Architects",
      status: "In Progress",
      year: 2025,
      category: "fullstack",
      image: "/images/projects/construction-site.png",
      featured: true,
    },
    {
      id: 3,
      title: "Prolific T-Shirt Store ",
      description:
        "An e-commerce frontend for a T-shirt store with 3D previews and cart functionality.",
      detailedDescription:
        "Built using React, Vite, and Three.js for interactive 3D T-shirt previews. Includes shopping cart, product catalog, and responsive design.",
      tech: ["React", "Vite", "Three.js", "TailwindCSS"],
      link: "https://prolific-szn.vercel.app/",
      github: "https://github.com/yourusername/tshirt-prolific",

      status: "Completed",
      year: 2024,
      category: "frontend",
      image: "/images/projects/tshirt-prolific.png",
      featured: false,
    },
    {
      id: 4,
      title: "Construction Material Tracker",
      description:
        "A React-based frontend app for tracking construction materials on site.",
      detailedDescription:
        "Standalone frontend with JSON storage (no backend). Tracks daily material usage, deliveries, and remaining stock. Includes visualization dashboards.",
      tech: ["React", "TailwindCSS", "JSON"],
      link: "https://sa-ka-wa.github.io/constructionProjectManagement/",
      github: "https://github.com/sa-ka-wa/constructionProjectManagement",
      status: "Completed",
      year: 2024,
      category: "frontend",
      image: "/images/projects/material-tracker.png",
      featured: false,
    },
    {
      id: 5,
      title: "Construction Material Tracker",
      description:
        "A React-based frontend app for tracking construction materials on site.",
      detailedDescription:
        "Standalone frontend with JSON storage (no backend). Tracks daily material usage, deliveries, and remaining stock. Includes visualization dashboards.",
      tech: ["React", "TailwindCSS", "JSON"],
      link: "https://expense-tracker-seven-xi-95.vercel.app/",
      github: "https://github.com/sa-ka-wa/expense-tracker",
      status: "Completed",
      year: 2024,
      category: "frontend",
      image: "/images/projects/material-tracker.png",
      featured: false,
    },
    {
      id: 6,
      title: "Amali HealthE (Backend)",
      description:
        "A CLI-based health and calorie tracking system with PostgreSQL.",
      detailedDescription:
        "Backend application built with Python, Typer, and SQLAlchemy. Supports user management, meal logging, calorie goals, and reports. Designed for expansion into a full web app.",
      tech: ["Python", "Typer", "SQLAlchemy", "PostgreSQL"],
      link: "https://github.com/sa-ka-wa/Amali",
      github: "https://github.com/sa-ka-wa/Amali",
      status: "Completed",
      year: 2025,
      category: "backend",
      image: "/images/projects/amali-healthe.png",
      featured: false,
    },
    {
      id: 7,
      title: "Microservices Architecture",
      description:
        "A scalable microservices architecture for a high-traffic application with service discovery, load balancing, and centralized logging.",
      detailedDescription:
        "Designed and implemented a microservices architecture to replace a monolithic application, resulting in improved scalability and maintainability. The system includes API gateway, service discovery, distributed tracing, and automated deployment pipelines.",
      tech: ["Node.js", "Docker", "Kubernetes", "AWS", "ELK Stack"],
      link: "#",
      github: "#",
      status: "Completed",
      year: 2021,
      category: "devops",
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      id: 8,
      title: "Mobile Fitness App",
      description:
        "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress with social features.",
      detailedDescription:
        "This mobile app helps users achieve their fitness goals by providing workout plans, nutrition tracking, progress analytics, and social challenges. It includes both iOS and Android versions built with React Native.",
      tech: ["React Native", "Firebase", "Redux", "HealthKit API"],
      link: "#",
      github: "#",
      status: "Completed",
      year: 2022,
      category: "mobile",
      image: "/api/placeholder/400/250",
      featured: false,
    },
  ];

  const architectureProjects = [
    {
      id: 1,
      title: "Modern Residence Design",
      description:
        "A contemporary home design with sustainable materials, open spaces, and integration with the natural environment.",
      detailedDescription:
        "This residential project focuses on creating harmony between built and natural environments. The design incorporates passive solar principles, rainwater harvesting, and locally sourced materials. The open floor plan maximizes natural light and ventilation.",
      tech: ["Residential", "Sustainable", "Modern", "Eco-friendly"],
      link: "#",
      status: "Completed",
      year: 2023,
      category: "residential",
      image: "/api/placeholder/400/250",
      featured: true,
      location: "Austin, TX",
      size: "3200 sq ft",
    },
    {
      id: 2,
      title: "Commercial Complex",
      description:
        "A mixed-use development with retail, office, and public spaces designed to create a vibrant community hub.",
      detailedDescription:
        "This commercial complex revitalizes an urban area with a mix of retail spaces, offices, and public plazas. The design emphasizes pedestrian-friendly spaces, green areas, and flexible layouts that can adapt to changing needs over time.",
      tech: ["Commercial", "Mixed-use", "Urban", "Sustainable"],
      link: "#",
      status: "Completed",
      year: 2022,
      category: "commercial",
      image: "/api/placeholder/400/250",
      featured: true,
      location: "Seattle, WA",
      size: "85,000 sq ft",
    },
    {
      id: 3,
      title: "Cultural Center",
      description:
        "A public cultural center designed to promote arts and community engagement with flexible performance and exhibition spaces.",
      detailedDescription:
        "This cultural center serves as a gathering place for the community, featuring a main performance hall, gallery spaces, workshops, and outdoor amphitheater. The design incorporates acoustic optimization, flexible partitioning, and accessibility features.",
      tech: ["Public", "Cultural", "Innovative", "Accessible"],
      link: "#",
      status: "In Progress",
      year: 2023,
      category: "public",
      image: "/api/placeholder/400/250",
      featured: false,
      location: "Portland, OR",
      size: "45,000 sq ft",
    },
    {
      id: 4,
      title: "Urban Renewal Project",
      description:
        "Rehabilitation of a historic district with careful preservation of architectural heritage while introducing modern amenities.",
      detailedDescription:
        "This project involved the careful restoration of historic buildings alongside the introduction of new infrastructure and public spaces. The design approach balanced preservation with modernization, creating a vibrant neighborhood that honors its history while meeting contemporary needs.",
      tech: ["Urban Planning", "Historic Preservation", "Mixed-use"],
      link: "#",
      status: "Completed",
      year: 2021,
      category: "urban",
      image: "/api/placeholder/400/250",
      featured: false,
      location: "Boston, MA",
      size: "12 city blocks",
    },
  ];

  const projects =
    type === "software" ? softwareProjects : architectureProjects;
  const sectionId =
    type === "software" ? "software-projects" : "architecture-projects";

  // Get unique categories for filtering
  const categories = [...new Set(projects.map((project) => project.category))];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id={sectionId}
      className={
        type === "architecture"
          ? styles.architectureSection
          : styles.softwareSection
      }
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {type === "software" ? (
            <span className={styles.blueTitle}>
              Software Engineering Projects
            </span>
          ) : (
            <span className={styles.orangeTitle}>Architecture Projects</span>
          )}
        </h2>

        <p className={styles.sectionDescription}>
          {type === "software"
            ? "A collection of software solutions I've designed and developed, showcasing my technical expertise and problem-solving approach."
            : "Architectural designs and projects that demonstrate my creative vision and technical proficiency in spatial design."}
        </p>

        {/* Filter buttons for software projects */}
        {type === "software" && (
          <div className={styles.filterContainer}>
            <button
              className={`${styles.filterButton} ${
                activeFilter === "all" ? styles.active : ""
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${
                  activeFilter === category ? styles.active : ""
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} type={type} />
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <p>Want to see more of my work?</p>
          <button className={styles.ctaButton}>
            {type === "software" ? "View Full Portfolio" : "See All Designs"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
