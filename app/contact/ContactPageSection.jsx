"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from 'lenis/react'
import "./contact.css";
import { SectionFooter } from "../Main/SectionFooter";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { usePathname, useRouter } from 'next/navigation';
import { Linkedin, Mail, Phone } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const ContactPageSection = () => {
  // ANIMATIONS

  const titleRef = useRef()
  const lineRef = useRef()
  const contactItem1 = useRef()
  const contactItem2 = useRef()
  const contactItem3 = useRef()
  const contactItem4 = useRef()
  const contactItem5 = useRef()
  const contactItem6 = useRef()
  const contactItem7 = useRef()
  const imageRef = useRef()
  const imageWrapperRef = useRef()

  useEffect(() => {

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(titleSplit.chars, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.02, duration: 0.75, ease: "power1" });

    // line animation
    gsap.fromTo(lineRef.current, { opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, delay: 0.5 })

    // carousel wrapper animation

    gsap.to(contactItem1.current, { delay: 0.4, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });
    gsap.to(contactItem2.current, { delay: 0.5, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });
    gsap.to(contactItem3.current, { delay: 0.6, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });
    gsap.to(contactItem4.current, { delay: 0.7, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });
    gsap.to(contactItem5.current, { delay: 0.8, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });
    gsap.to(contactItem6.current, { delay: 0.9, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });
    gsap.to(contactItem7.current, { delay: 1, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });

    gsap.to(imageWrapperRef.current, { delay: 0.5, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });

  }, [])

  // CARDS MOUSE ANIMATION
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    
    let box1X = 0;
    let box1Y = 0;
    
    const speed = 0.025; // Decrease this value for slower, more noticeable easing
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };
    
    const animate = () => {
      // Box 1 movement
      const distX1 = (mouseX * -1) - box1X;
      const distY1 = (mouseY * -1) - box1Y;
      box1X += distX1 * speed;
      box1Y += distY1 * speed;
    
      // Apply the calculated transforms
      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${box1X}px, ${box1Y}px)`;
      }
    
      requestAnimationFrame(animate); // Continue the animation loop
    };
    
    animate();
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // NAVIGATION

  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <ReactLenis root>
      <section className="contact">
        <div className="contact-content">
          <div className="contact-content-top">
            <div className="titlebox">
              <div className="titlebox-gradient" />
              <h1 className="headline white" ref={titleRef} >Get in Touch</h1>
            </div>
            <div className="contact-divider" ref={lineRef} />
          </div>
          <div className="contact-content-row">
            <div className="contact-content-left">
              <div className="contact-content-column">
                <div className="contact-content-top-item opacity-blur" ref={contactItem1} >
                  <div className="contact-content-top-item-profile">
                    <img src="/images/mockup4.webp" className="contact-content-top-item-image" alt="" />
                  </div>
                  <div className="contact-content-top-item-text">
                    <p className="description white" >Let&apos;s bring your idea to life. Reach out and get in touch with management directly.</p>
                  </div>
                </div>
                <div className="contact-content-column-row">
                  <div className="contact-content-small-item opacity-blur" ref={contactItem2} >
                    <img src="/logos/phone.svg" className="contact-content-small-item-icon" alt="" />
                    <p className="small-description grey" >Call</p>
                  </div>
                  <div className="contact-content-small-item opacity-blur" ref={contactItem3} >
                    <Mail strokeWidth={2.5} className="contact-content-small-item-icon" />
                    <p className="small-description grey" >Email</p>
                  </div>
                  <div className="contact-content-small-item opacity-blur" ref={contactItem4} >
                    <img src="/logos/linkedin.svg" className="contact-content-small-item-icon" alt="" />
                    <p className="small-description grey" >LinkedIn</p>
                  </div>
                </div>
                <div className="contact-content-item opacity-blur" ref={contactItem5} >
                  <p className="small-description grey" >Videocall</p>
                  <p className="description white" >Book a videocall</p>
                </div>
                <div className="contact-content-item opacity-blur" ref={contactItem6} >
                  <p className="small-description grey" >Email</p>
                  <p className="description white" >admin@dialedweb.com</p>
                </div>
                <div className="contact-content-item opacity-blur" ref={contactItem7} >
                  <p className="small-description grey" >Address</p>
                  <p className="description white" >545 La Jolla Village Drive</p>
                  <p className="description white" >San Diego</p>
                  <p className="description white" >California</p>
                </div>
              </div>
            </div>
            <div className="contact-content-right opacity-blur" ref={imageWrapperRef} >
              <img src="/images/dwlogonew2.webp" className="contact-content-right-image" ref={imageRef} alt="" />
            </div>
          </div>
        </div>
      </section>
      <SectionFooter />
    </ReactLenis>
  );
};