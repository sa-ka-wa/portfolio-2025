// src/components/Global3DCanvas.jsx
import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Global3DCanvas.module.css";

gsap.registerPlugin(ScrollTrigger);

const Global3DCanvas = () => {
  useEffect(() => {
    // --- Setup scene ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Make it fixed behind everything
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";

    document.body.appendChild(renderer.domElement);

    // --- Lights ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7.5);
    scene.add(dirLight);

    // --- Load GLTF Model ---
    const loader = new GLTFLoader();
    let model;

    loader.load(
      "/model/towercraneoffice.glb",
      (gltf) => {
        model = gltf.scene;

        // Center and scale
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);
        model.position.sub(center);
        const maxDim = Math.max(size.x, size.y, size.z);
        model.scale.setScalar(3 / maxDim);

        scene.add(model);

        // --- Scroll-based animations ---
        const heroSection = document.querySelector("#home");
        const softwareSection = document.querySelector("#software");
        const archSection = document.querySelector("#architecture");

        // Default position (Hero)
        gsap.set(model.position, { x: 0, y: 0 });

        // Move into Software section
        gsap.to(model.position, {
          x: -2,
          y: -1.5,
          scrollTrigger: {
            trigger: softwareSection,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });

        // Move into Architecture section
        gsap.to(model.position, {
          x: 2,
          y: -3,
          scrollTrigger: {
            trigger: archSection,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });

        // Continuous spin
        gsap.to(model.rotation, {
          y: "+=" + Math.PI * 2,
          repeat: -1,
          duration: 30,
          ease: "none",
        });
      },
      undefined,
      (err) => console.error("Error loading model:", err)
    );

    // --- Animation loop ---
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // --- Resize ---
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      document.body.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return null; // nothing visible, only the canvas behind
};

export default Global3DCanvas;
