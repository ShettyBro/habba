import React from 'react'
import Intro from '../components/Home/Intro'
import CountDown from '../components/Home/CountDown'
import AnimatedContent from '../components/gsap/AnimatedContent'
import { HubbaWobbleCards } from '../components/Home/Glance'
import { IMAGES } from '../assets/Images'
import Gallery from '../components/Home/ImageHover'
import { HeroParallaxDemo } from '../components/Home/HeroParallaxDemo'
// import ScrollGallery from '../components/Home/ScrollGallery'
import FAQ from '../components/Home/FAQ'
// import Parallax from '../components/Home/Parallax'
import Sponser from '../components/Home/Sponser'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className='bg-cover bg-center backdrop-blur-3xl w-full'  >
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

{/* Content */}
<div className="relative z-10">
      <AnimatedContent distance={70} direction="vertical" reverse={false} duration={1}  ease="power3.out"  initialOpacity={0} animateOpacity  scale={1}  threshold={0.2}  delay={0.3}>
        <div>
          <CountDown/>
        </div>
      </AnimatedContent>
      <AnimatedContent distance={70} direction="vertical" reverse={false} duration={1}  ease="power3.out"  initialOpacity={0} animateOpacity  scale={1}  threshold={0.2}  delay={0.3}>
        <div>
          <Intro/>
        </div>
      </AnimatedContent>
      <HeroParallaxDemo/>
      <div className="w-full py-20 overflow-hidden">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch container mx-auto">
          {/* LEFT — IMAGE (desktop only) */}
          <AnimatedContent
            distance={120}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.25}
            delay={0.2}
          >
            <div className="hidden lg:flex h-full">
              <img
                src={IMAGES.GALLERY12}
                alt=""
                className="h-full w-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </AnimatedContent>
          {/* RIGHT — CONTENT */}
          <AnimatedContent
            distance={120}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.25}
            delay={0.4}   // 👈 comes after image
          >
            <div className="w-full">
              <HubbaWobbleCards />
            </div>
          </AnimatedContent>
        </div>
      </div>
      </div>
      <AnimatedContent distance={70} direction="vertical" reverse={false} duration={1}  ease="power3.out"  initialOpacity={0} animateOpacity  scale={1}  threshold={0.2}  delay={0.3}>
        <div>
      <Sponser/>
        </div>
      </AnimatedContent>
      <AnimatedContent distance={70} direction="vertical" reverse={false} duration={1}  ease="power3.out"  initialOpacity={0} animateOpacity  scale={1}  threshold={0.2}  delay={0.3}>
        <div>
        <Gallery/>
        </div>
      </AnimatedContent>
      <AnimatedContent distance={70} direction="vertical" reverse={false} duration={1}  ease="power3.out"  initialOpacity={0} animateOpacity  scale={1}  threshold={0.2}  delay={0.3}>
        <div>
        <FAQ/>
        </div>
      </AnimatedContent>
</div>
     

  )
}

export default AboutUs
