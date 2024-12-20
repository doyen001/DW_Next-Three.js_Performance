import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Instagram, Linkedin, Twitter } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionFooter = () => {

  const topRef1 = useRef();
  const topRef2 = useRef();
  const topRef3 = useRef();
  const centerRef1 = useRef();
  const bottomRef1 = useRef();
  const bottomRef2 = useRef();

  useEffect(() => {
    gsap.fromTo(topRef1.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: topRef1.current, start: "top 95%" }});
    gsap.fromTo(topRef2.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: topRef1.current, start: "top 95%" }});
    gsap.fromTo(topRef3.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0.4, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: topRef1.current, start: "top 95%" }});
    gsap.fromTo(centerRef1.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: centerRef1.current, start: "top 95%" }});
    gsap.fromTo(bottomRef1.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: bottomRef1.current, start: "top 95%" }});
    gsap.fromTo(bottomRef2.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: bottomRef2.current, start: "top 95%" }});
  }, [])

  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-content-left" ref={topRef1} >
          <img src="/images/dwlogonew2.webp" className="footer-logo" alt="" />
          <h1 className="subheadline white" >Dialedweb</h1>
          <p className="description grey"  >Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality</p>
        </div>
        <div className="footer-content-right" ref={topRef2} >
          <div className="footer-content-right-column">
            <h2 className="description white" >Company</h2>
            <div className="footer-column-contents">
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Home</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >About</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Projects</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Get In Touch</p>
              </div>
            </div>
          </div>
          <div className="footer-content-right-column" ref={topRef3} >
            <h2 className="description white" >Legal</h2>
            <div className="footer-column-contents">
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Terms of Service</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Privacy Policy</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Cookie Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider" ref={centerRef1} />
      <div className="footer-content-bottom">
        <p className="small-description grey" ref={bottomRef1} >© 2024 Dialedweb All Rights Reserved</p>
        <div className="footer-socials" ref={bottomRef2} >
          <Instagram strokeWidth={1.25} className="footer-socials-icon" />
          <Twitter strokeWidth={1.25} className="footer-socials-icon" />
          <Linkedin strokeWidth={1.25} className="footer-socials-icon" />
        </div>
      </div>
    </section>
  );
};