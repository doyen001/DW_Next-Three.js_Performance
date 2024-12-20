/* eslint-disable react/jsx-key */
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionFlower = () => {

    useEffect(() => {
        let frameCount = 300,
        urls = new Array(frameCount).fill().map((o, i) => `/imageSequence/image${i + 1}.webp`);
        
    
        imageSequence({
          urls,
          canvas: "#image-sequence", 
          scrollTrigger: {
            trigger: ".flower",
            start: "top bottom",
            end: "bottom top", 
            scrub: true,
          }
        });
    
        function imageSequence(config) {
          let playhead = {frame: 0},
          canvas = gsap.utils.toArray(config.canvas)[0] || console.warn("canvas not defined"),
          ctx = canvas.getContext("2d"),
          curFrame = -1,
          onUpdate = config.onUpdate,
          images,
          updateImage = function() {
            let frame = Math.round(playhead.frame);
            if (frame !== curFrame) {
              config.clear && ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(images[Math.round(playhead.frame)], 0, 0);
              curFrame = frame;
              onUpdate && onUpdate.call(this, frame, images[frame]);
            }
          };
          images = config.urls.map((url, i) => {
            let img = new Image();
            img.src = url;
            i || (img.onload = updateImage);
            return img;
          });
          return gsap.to(playhead, {
            frame: images.length - 1,
            ease: "none",
            onUpdate: updateImage,
            duration: images.length / (config.fps || 30),
            paused: !!config.paused,
            scrollTrigger: config.scrollTrigger
          });
        }
    })

    const imageRef1 = useRef();
    const imageRef2 = useRef();

    const textRef1 = useRef();
    const textRef2 = useRef();
    const textRef3 = useRef();
    const textRef4 = useRef();
    const textRef5 = useRef();
    const textRef6 = useRef();
    const textRef7 = useRef();
    const textRef8 = useRef();
  
    useEffect(() => {
  
      gsap.fromTo(imageRef1.current, { width: 0, opacity: 0 }, { width: "5vw", opacity: 1, duration: 1, scrollTrigger: { trigger: imageRef1.current, start: "top 95%" } })
      gsap.fromTo(imageRef2.current, { width: 0, opacity: 0 }, { width: "5vw", opacity: 1, duration: 1, scrollTrigger: { trigger: imageRef2.current, start: "top 95%" } })

      const textRefSplit1 = new SplitText(textRef1.current, { type: "chars" });
      const textRefSplit2 = new SplitText(textRef2.current, { type: "chars" });
      const textRefSplit3 = new SplitText(textRef3.current, { type: "chars" });
      const textRefSplit4 = new SplitText(textRef4.current, { type: "chars" });
      const textRefSplit5 = new SplitText(textRef5.current, { type: "chars" });
      const textRefSplit6 = new SplitText(textRef6.current, { type: "chars" });
      const textRefSplit7 = new SplitText(textRef7.current, { type: "chars" });
      const textRefSplit8 = new SplitText(textRef8.current, { type: "chars" });

      gsap.fromTo(textRefSplit1.chars, { opacity: 0.25 }, { delay: 0, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef1.current, start: "top 95%" } })
      gsap.fromTo(textRefSplit2.chars, { opacity: 0.25 }, { delay: 0.25, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef2.current, start: "top 95%" } })
      gsap.fromTo(textRefSplit3.chars, { opacity: 0.25 }, { delay: 0.5, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef3.current, start: "top 95%" } })

      gsap.fromTo(textRefSplit4.chars, { opacity: 0.25 }, { delay: 0, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef4.current, start: "top 95%" } })
      gsap.fromTo(textRefSplit5.chars, { opacity: 0.25 }, { delay: 0.6, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef5.current, start: "top 95%" } })
      gsap.fromTo(textRefSplit6.chars, { opacity: 0.25 }, { delay: 0.85, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef6.current, start: "top 95%" } })

      gsap.fromTo(textRefSplit7.chars, { opacity: 0.25 }, { delay: 0, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef7.current, start: "top 95%" } })
      gsap.fromTo(textRefSplit8.chars, { opacity: 0.25 }, { delay: 0.25, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef8.current, start: "top 95%" } })
  
    }, [])

  return (
    <section className="flower">
      <div className="flower-content">
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />
        <div className="flower-content-sequence">
          <canvas className="image-sequence-canvas" id="image-sequence" width="1920" height="1080" />
        </div>
        <div className="flower-content-textbox">
          <div className="flower-content-textbox-item" >
            <span>
              <h1 className="subheadline white" ref={textRef1} >Grow</h1>
            </span>
            <span>
              <h1 className="subheadline white" ref={textRef2} >Your</h1>
            </span>
            <span>
              <h1 className="subheadline white" ref={textRef3} >Digital</h1>
            </span>
            <span>
              <div className="flower-content-right-content-item" ref={imageRef1} >
                <img src="/images/iphoneoptimized.png" className="flower-content-right-content-item-image" alt="" />
              </div>
            </span>
          </div>
          <div className="flower-content-textbox-item" >
            <span>
              <h1 className="subheadline white" ref={textRef4} >Presence,</h1>
            </span>
            <span>
              <h1 className="subheadline white" ref={textRef5} >Let</h1>
            </span>
            <span>
              <h1 className="subheadline white" ref={textRef6} >Your</h1>
            </span>
          </div>
          <div className="flower-content-textbox-item" >
            <span>
              <h1 className="subheadline white" ref={textRef7} >Vision</h1>
            </span>
            <span>
              <div className="flower-content-right-content-item" ref={imageRef2} >
                <img src="/images/iphoneoptimized.png" className="flower-content-right-content-item-image" alt="" />
              </div>
            </span>
            <span>
              <h1 className="subheadline white" ref={textRef8} >Bloom</h1>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};