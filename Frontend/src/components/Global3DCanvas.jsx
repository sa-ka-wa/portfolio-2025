// src/components/Global3DCanvas.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Global3DCanvas.module.css";

gsap.registerPlugin(ScrollTrigger);

const Global3DCanvas = () => {
  const mountRef = useRef(null);

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

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance

    // Make it fixed behind everything
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";
    renderer.domElement.id = "global-3d-canvas";

    document.body.appendChild(renderer.domElement);

    // --- Lights ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7.5);
    scene.add(dirLight);

    // --- Load GLTF Model ---
    const loader = new GLTFLoader();
    let model;
    let animationFrameId;
    let rotationAnimation; // To store the rotation tween

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

        // Start with model on the right (hero section position)
        model.position.x = 2;
        model.position.y = 1;

        scene.add(model);

        // Wait for DOM elements to be available
        setTimeout(() => {
          // --- Scroll-based animations ---
          const heroSection = document.querySelector("#home");
          const softwareSection = document.querySelector("#software");
          const archSection = document.querySelector("#architecture");

          if (heroSection && softwareSection && archSection) {
            // Reset scroll triggers first to avoid conflicts
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

            // Move from right (hero) to center
            gsap.to(model.position, {
              x: 0,
              y: 0,
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: true,
                markers: false,
              },
            });

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

            // Refresh ScrollTrigger after setting up all animations
            ScrollTrigger.refresh();
          }
        }, 500);

        // Continuous spin using GSAP (as in original code)
        rotationAnimation = gsap.to(model.rotation, {
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
      animationFrameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // --- Resize handler with debouncing ---
    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Refresh ScrollTrigger after resize
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);

      // Kill the rotation animation
      if (rotationAnimation) {
        rotationAnimation.kill();
      }

      // Properly dispose of Three.js resources
      renderer.dispose();

      // Remove all ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Remove canvas from DOM
      const canvas = document.getElementById("global-3d-canvas");
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ display: "none" }} />;
};

export default Global3DCanvas;
