/* eslint-disable react/jsx-key */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionShowreel = () => {

  const videoRef = useRef();
  const playButtonRef = useRef();
  const showreelItemRef1 = useRef();
  const showreelItemRef2 = useRef();
  const showreelItemRef3 = useRef();
  const showreelItemRef4 = useRef();

  useEffect(() => {

    gsap.to(videoRef.current, { rotateY: "0deg", scale: "1", rotateX: "0deg", translateY: "0vh", scrollTrigger: { trigger: ".showreel", start: "top bottom", end: "top top", scrub: true, markers: false } })

    gsap.to(showreelItemRef1.current, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef1.current, start: "top 95%" }});
    gsap.to(showreelItemRef2.current, { delay: 0.1, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef2.current, start: "top 95%" }});
    gsap.to(showreelItemRef3.current, { delay: 0.2, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef3.current, start: "top 95%" }});
    gsap.to(showreelItemRef4.current, { delay: 0.3, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef4.current, start: "top 95%" }});
    
    let mouseX = 0;
    let mouseY = 0;
    let buttonX = 0;
    let buttonY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };

    const animate = () => {
      const distX = mouseX - buttonX;
      const distY = mouseY - buttonY;

      buttonX += distX * speed;
      buttonY += distY * speed;

      if (playButtonRef.current) {
        playButtonRef.current.style.transform = `translate(${buttonX}px, ${buttonY }px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="showreel">
      <div className="showreel-content">
        <div className="showreel-content-container" >
          <div className="showreel-video-playbutton" ref={playButtonRef} >
            <Play fill="#010101" className="showreel-video-playbutton-icon" />
          </div>
          <div ref={videoRef} className="showreel-content-videobox" >
            <div className="background">
              <div className="trail"></div>
            </div>
            <video src="/videos/ese.mp4" className="showreel-content-video" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
          </div>
        </div>
        <div className="showreel-content-row">
          <div className="showreel-content-row-item opacity-blur" ref={showreelItemRef1} >
            <Image src="/logos/awwwards.svg" className="showreel-content-row-item-image" alt="" />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div className="showreel-content-row-item opacity-blur" ref={showreelItemRef2} >
            <Image src="/logos/cssbestui.svg" className="showreel-content-row-item-image" alt="" />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div className="showreel-content-row-item opacity-blur" ref={showreelItemRef3} >
            <Image src="/logos/cssbestinnovation.svg" className="showreel-content-row-item-image" alt="" />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div className="showreel-content-row-item opacity-blur" ref={showreelItemRef4} >
            <Image src="/logos/cssbestux.svg" className="showreel-content-row-item-image" alt="" />
            <div className="showreel-content-row-item-grid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionShowreel;