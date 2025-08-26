import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import styles from "./Hero3D.module.css";

const Hero3D = () => {
  const mountRef = useRef(null);
  const [scene] = useState(() => new THREE.Scene());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Set up Three.js scene
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Create geometry with different colors on each face
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    const materials = [
      new THREE.MeshBasicMaterial({
        color: 0x2563eb,
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xf97316,
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xfb923c,
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xfdba74,
        transparent: true,
        opacity: 0.8,
      }),
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose(); // ✅ free GPU memory
    };
  }, [scene]);

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
      <div className={styles.threeContainer} ref={mountRef}></div>
    </section>
  );
};

export default Hero3D;
