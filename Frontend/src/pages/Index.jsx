import React from "react";
import Navigation from "../components/Navigation";
import Hero3D from "../components/Hero3D";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SoftwareIntro from "../components/SoftwareIntro";
import ArchitectureIntro from "../components/ArchitectureIntro";
import Global3DCanvas from "../components/Global3DCanvas"; // ✅ import the global canvas

const Index = () => {
  return (
    <div className="App">
      {/* ✅ This makes the canvas global, fixed behind everything */}
      <Global3DCanvas />

      <Navigation />
      <Hero3D />
      <SoftwareIntro />
      <ProjectsSection type="software" />
      <ArchitectureIntro />
      <ProjectsSection type="architecture" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
