import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import styles from "./Hero3D.module.css";

const Hero3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // --- Setup scene ---
    const scene = new THREE.Scene();

    // --- Setup camera ---
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 2, 5);

    // --- Setup renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // --- Load GLB model ---
    const loader = new GLTFLoader();
    let model;

    loader.load(
      "/model/towercraneoffice.glb",
      (gltf) => {
        model = gltf.scene;

        // Center and scale model automatically
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);

        model.position.sub(center); // center the model at (0,0,0)

        // scale down if it’s too large
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim; // fit into a 3-unit cube
        model.scale.setScalar(scale);

        scene.add(model);
      },
      undefined,
      (error) => console.error("Error loading GLB:", error)
    );

    // --- Animation loop ---
    const animate = () => {
      requestAnimationFrame(animate);

      if (model) {
        model.rotation.y += 0.002; // slow spin
      }

      renderer.render(scene, camera);
    };
    animate();

    // --- Resize handling ---
    const handleResize = () => {
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

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
