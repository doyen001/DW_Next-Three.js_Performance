"use client";
import { ReactLenis, useLenis } from 'lenis/react'
import { SectionHero } from "./SectionHero";
import { SectionFooter } from "./SectionFooter";
import { SectionShowreel } from "./SectionShowreel";
import { SectionTestimonials } from "./SectionTestimonials";
import { SectionTechstack } from "./SectionTechstack";
import { SectionFlower } from "./SectionFlower";
import { SectionServices } from "./SectionServices";
import { SectionProjects } from "./SectionProjects";
import { SectionProjectsMobile } from "./SectionProjectsMobile";
import { SectionKPI } from "./SectionKPI";
import "./main.css";
import { useEffect, useLayoutEffect, useState } from 'react';
import { useProgress } from "@react-three/drei";

const Main = () => {

  const { progress } = useProgress();
  const [fadeOut, setFadeOut] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true); // Tracks the initial loading phase
  const lenis = useLenis();

  // Handle the initial loading phase
  useEffect(() => {
    if (initialLoad) {
      lenis?.stop(); // Only stop lenis during the initial load
    }
  }, [lenis, initialLoad]);

  useLayoutEffect(() => {
    if (progress === 100) {
      setFadeOut(true);
      lenis?.start();
      setInitialLoad(false)
    }
  }, [progress, lenis, initialLoad]);

  return (
    <ReactLenis root>
      <div className={`initial-loading-screen ${fadeOut ? "fade-out" : ""}`} >
        <div className="loading-image-box" >
          <img src="/images/loading.gif" className="loading-image" alt="Loading Image" />
        </div>
      </div>
      <SectionHero />
      <div className="normal-padding" />
      <SectionShowreel />
      <div className="border-padding">
        <div className="section-border"></div>
      </div>
      <SectionServices />
      <div className="normal-padding" />
      <SectionProjects />
      <SectionProjectsMobile />
      <div className="normal-padding" />
      <SectionTechstack />
      <div className="normal-padding" />
      <SectionTestimonials />
      <div className="normal-padding" />
      <SectionKPI />
      <div className="normal-padding" />
      <SectionFlower />
      <div className="normal-padding" />
      <SectionFooter />
    </ReactLenis>
  );
};

export default Main;
