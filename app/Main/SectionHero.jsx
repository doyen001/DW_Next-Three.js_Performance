/* eslint-disable react/jsx-key */
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import Image from "next/image";
import { Item3 } from "./HeroModel/Coins";
import { useProgress } from "@react-three/drei";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionHero = () => {

  // LOADING
  const { progress } = useProgress();
  const [playAnimation, setPlayAnimation] = useState(false);

  useLayoutEffect(() => {
    if (progress === 100) {
      setPlayAnimation(true);
    }
  }, [progress]);

  // REFS 
  const titleRef = useRef()
  const descriptionRef = useRef(null)
  const buttonRef1 = useRef()
  const buttonCircleRef1 = useRef()
  const buttonRef2 = useRef()
  const logosWrapperRef = useRef()
  const cursor = useRef()
  const [showCursor, setShowCursor] = useState(false)

  // GSAP ANIMATIONS
  useLayoutEffect(() => {

    if (playAnimation) {
      gsap.set(titleRef.current, { opacity: 1 })
      descriptionRef.current.style.opacity = 0;
      const titleSplit = new SplitText(titleRef.current, { type: "chars" });
      gsap.fromTo(titleSplit.chars, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { delay: 0.4, opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.02, duration: 0.75, ease: "power1" });

      // description text animation
      descriptionRef.current.style.transition = 'opacity 3s ease-in-out'; // Smooth transition for 0.5 seconds
      descriptionRef.current.style.opacity = 1;

      // buttons animation
      gsap.to(buttonRef1.current, { delay: 1.1, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: "power1" })
      gsap.to(buttonRef2.current, { delay: 1.4, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: "power1" })

      // logos wrapper animation
      gsap.to(logosWrapperRef.current, { opacity: 1, filter: 'blur(0px)', duration: 1, delay: 0.9 })

    }

  }, [playAnimation])

  // FOLLOWING CURSOR
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;

      cursorX += distX * speed;
      cursorY += distY * speed;

      if (cursor.current) {
        cursor.current.style.left = `${cursorX}px`;
        cursor.current.style.top = `${cursorY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (showCursor) {
      gsap.to(cursor.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      });
    } else {
      gsap.to(cursor.current, {
        autoAlpha: 0,
        scale: 0,
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [showCursor]);

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  return (
    <section className="hero">
      <div className="hero-background-element-small" />
      <div className="hero-background-element-grid-small" />
      <div className="hero-content">
        <div className="hero-content-row">
          <div className="hero-content-left">
            <div className="hero-textbox">
              <div className="hero-titlebox">
                <div className="hero-titlebox-gradient" />
                <h1 className="headline hero-headline white" ref={titleRef} >Crafting Digital <br /> Masterpieces</h1>
              </div>
              <p className="big-description grey" style={{ opacity: 0 }} ref={descriptionRef} >Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality</p>
            </div>
            <div className="hero-buttons-row">
              <button className="button opacity-blur" ref={buttonRef1} >
                <div className="button-content">
                  <span className="small-description">See More</span>
                  <span className="small-description">See More</span>
                </div>
                <div className="button-circle" ref={buttonCircleRef1} >
                  <ArrowUpRight className="button-icon button-icon-180" />
                </div>
              </button>
              <button className="button opacity-blur" ref={buttonRef2} >
                <div className="button-content">
                  <span className="small-description">Get In Touch</span>
                  <span className="small-description">Get In Touch</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </button>
              </div>
          </div>
          <div className="hero-content-right" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Canvas 
              style={{ pointerEvents: 'auto', width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 1 }}
              camera={{ position: [2, 0, 10], fov: 35 }}
              dpr={[1, 2]}
              gl={{ powerPreference: 'high-performance', preserveDrawingBuffer: true }}
            >
              <Suspense fallback >
                <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
                  <Item3 />
                </Float>
                <Environment files={['/hdr/venice_sunset_1k.jpg']} />
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} enableRotate={true} enablePan={false} />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className="hero-content-bottom opacity-blur" ref={logosWrapperRef} >
          <Marquee className="hero-content-bottom-row" gradient={true} gradientColor="#010101" gradientWidth={250}>
            {[
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
            ].map((src, i) => (
              <div className="hero-content-bottom-item" key={i}>
                <Image width={100} height={100} src={src} alt={`Marquee item ${i + 1}`} priority className="hero-content-bottom-image" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="hover-cursor" ref={cursor}>
        <p className="small-description white" >Drag</p>
      </div>
    </section>
  );
};