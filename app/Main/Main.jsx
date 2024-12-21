"use client";
import { useEffect, useLayoutEffect, useState } from 'react';
import { useProgress } from "@react-three/drei";
import dynamic from 'next/dynamic';
import Image from "next/image";

import { ReactLenis, useLenis } from 'lenis/react'
import { SectionHero } from "./SectionHero";

import "./main.css";

const SectionShowreel = dynamic(() => import("./SectionShowreel"), {
  ssr: true,
});
const SectionFooter = dynamic(() => import("./SectionFooter"), {
  ssr: true,
});
const SectionTestimonials = dynamic(() => import("./SectionTestimonials"), {
  ssr: true,
});
const SectionTechstack = dynamic(() => import("./SectionTechstack"), {
  ssr: true,
});
const SectionFlower = dynamic(() => import("./SectionFlower"), {
  ssr: true,
});
const SectionServices = dynamic(() => import("./SectionServices"), {
  ssr: true,
});
const SectionProjects = dynamic(() => import("./SectionProjects"), {
  ssr: true,
});
const SectionProjectsMobile = dynamic(() => import("./SectionProjectsMobile"), {
  ssr: true,
});
const SectionKPI = dynamic(() => import("./SectionKPI"), {
  ssr: true,
});


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
        <div className="loading-image-box">
          <Image src="/images/loading.gif" className="loading-image" alt="Loading Image" width={240} height={240} quality={50} priority />
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
