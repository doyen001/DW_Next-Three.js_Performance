/* eslint-disable react/jsx-key */
"use client";
import React, {  useEffect,  useRef  } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons} from "./Carousel/EmblaCarouselArrowButtons"
import { DotButton, useDotButton } from './Carousel/EmblaCarouselDotButton'
import Fade from 'embla-carousel-fade'
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionProjectsMobile = () => {

  const subheadlineBoxRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const contentRef = useRef();
  const imageContainerRef = useRef();

  // GSAP ANIMATIONS

  useEffect(() => {

    // subheadline box animation
    gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" }});

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

    // description text animation
    const descriptionSplit = new SplitText(descriptionRef.current, { type: "words" });
    gsap.fromTo(descriptionSplit.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: descriptionRef.current, start: "top 95%" } });

    // image parallax effect
    gsap.fromTo(imageContainerRef.current, { y: "10vw" }, { y: "-10vw", scrollTrigger: { trigger: ".projects", start: "top bottom", end: "bottom top", scrub: true} })
  }, [])

  // EMBLA CAROUSEL

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  

  return (
    <section className="projects projects-mobile">
      <div className="textbox">
        <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef} >
          <Star className="subheadline-box-icon" />
          <h2 className="small-description grey" >Featured Works</h2>
        </div>
        <div className="titlebox">
          <div className="titlebox-big-gradient" />
          <h1 className="subheadline white" ref={titleRef} >Pioneering Projects That Consistently <br className="hide-on-mobile" /> Redefine What’s Possible</h1>
        </div>
        <p className="description grey" ref={descriptionRef} >Transforming startups, SMEs, and industry <br className="hide-on-desktop" /> giants into digital leaders.</p>
      </div>
      <div className="projects-content" ref={contentRef} onClick={onNextButtonClick} >
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />
          <div className="project-content-wrapper" ref={imageContainerRef} >
          <div className="projects-carousel" ref={emblaRef} >
            <div className="projects-carousel-row">
              <div className="projects-carousel-item">
                <Image src="/mockups/heave.webp" width={1920} height={1080} unoptimized className="projects-carousel-item-image" alt="Heavecorp project" />
              </div>
              <div className="projects-carousel-item">
                <Image src="/mockups/essentia.webp" width={1920} height={1080} unoptimized className="projects-carousel-item-image" alt="" />
              </div>
              <div className="projects-carousel-item">
                <Image src="/mockups/kinimatic.webp" width={1920} height={1080} unoptimized className="projects-carousel-item-image" alt="" />
              </div>
              <div className="projects-carousel-item">
                <Image src="/mockups/peak.webp" width={1920} height={1080} unoptimized className="projects-carousel-item-image" alt="" />
              </div>
              <div className="projects-carousel-item">
                <Image src="/mockups/vitalenta.webp" width={1920} height={1080} unoptimized className="projects-carousel-item-image" alt="" />
              </div>
              <div className="projects-carousel-item">
                <Image src="/mockups/rev.webp" width={1920} height={1080} unoptimized className="projects-carousel-item-image" alt="" />
              </div>
            </div>
          </div>
          </div>
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
    </section>
  );
};

export default SectionProjectsMobile;