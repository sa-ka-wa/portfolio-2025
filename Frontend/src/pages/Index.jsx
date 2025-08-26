import React from "react";
import Navigation from "../components/Navigation";
import Hero3D from "../components/Hero3D";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="App">
      <Navigation />
      <Hero3D />
      <ProjectsSection type="software" />
      <ProjectsSection type="architecture" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
