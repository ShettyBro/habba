import React, { useEffect, useRef, useState } from "react";
import "./parallax.css";
import { IMAGES } from "../../assets/Images";

export default function Parallax() {
  const sectionRef = useRef(null);
  const habbaRefs = useRef([]);
  const vtuRefs = useRef([]);

  // Desktop images
  const HABBA_IMAGES = [IMAGES.H, IMAGES.A, IMAGES.B, IMAGES.B2, IMAGES.A2];
  const VTU_IMAGES = [IMAGES.V, IMAGES.T, IMAGES.U];

  // Mobile images
  const HABBA_IMAGES_MOBILE = [IMAGES.MH, IMAGES.MA, IMAGES.MB, IMAGES.MB2, IMAGES.MA2];
  const VTU_IMAGES_MOBILE = [IMAGES.MV, IMAGES.MT, IMAGES.MU];

  const [habbaImages, setHabbaImages] = useState(HABBA_IMAGES);
  const [vtuImages, setVtuImages] = useState(VTU_IMAGES);

  // ---------------- RESPONSIVE IMAGE SWITCH ----------------
  useEffect(() => {
    const updateImages = () => {
      const isMobile = window.innerWidth < 768;
      setHabbaImages(isMobile ? HABBA_IMAGES_MOBILE : HABBA_IMAGES);
      setVtuImages(isMobile ? VTU_IMAGES_MOBILE : VTU_IMAGES);
    };

    updateImages();
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, []);

  useEffect(() => {
    habbaRefs.current.forEach((el, i) => {
      if (!el) return;
  
      // staggered entrance
      setTimeout(() => {
        el.style.transform = "translateY(0%)";
        el.style.opacity = "1";
      }, i * 400); // 0ms, 400ms, 800ms, ...
    });
  }, []);


  /* ---------------- Stage 2 & 3: Scroll timeline ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = -rect.top;

      const phase1 = vh; // HABBA scroll phase
      const phase2 = vh; // VTU wave phase
      const total = phase1 + phase2;

      // ---------------- PHASE 1: HABBA goes up ----------------
      if (scrolled >= 0 && scrolled <= phase1) {
        const p = scrolled / phase1;
        const speeds = [220, 170, 130, 90, 50];

        habbaRefs.current.forEach((el, i) => {
          if (!el) return;
          const yMove = p * speeds[i];
          el.style.transform = `translateY(-${yMove}%)`;
          el.style.opacity = `${1 - p}`;
        });

        // Keep VTU hidden
        vtuRefs.current.forEach((el) => {
          if (!el) return;
          el.style.transform = `translateY(120%)`;
        });
      }

      // ---------------- PHASE 2: VTU wave from left → right ----------------
      else if (scrolled > phase1 && scrolled <= total) {
        const p = (scrolled - phase1) / phase2;

        // Hide HABBA fully
        habbaRefs.current.forEach((el) => {
          if (!el) return;
          el.style.opacity = 0;
        });

        const speedMultipliers = [1.7, 1.5, 1.7]; // V slow, T faster, U fastest
        const baseDistance = 120;

        vtuRefs.current.forEach((el, i) => {
          if (!el) return;

          const delay = i * 0.1; // left-to-right wave
          let localP = p - delay;
          localP = Math.min(Math.max(localP, 0), 1);

          // optional easing
          localP = Math.pow(localP, 0.75);

          const adjustedP = Math.min(localP * speedMultipliers[i], 1);

          const yMove = baseDistance - adjustedP * baseDistance;
          el.style.transform = `translateY(${Math.max(yMove, 0)}%)`;
        });
      }

      // ---------------- PHASE 3: HOLD VTU ----------------
      else if (scrolled > total) {
        vtuRefs.current.forEach((el) => {
          if (!el) return;
          el.style.transform = "translateY(0%)";
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="parallax-section">

      <div className="parallax-sticky">
        {/* HABBA layers */}
{habbaImages.map((img, i) => (
  <div
    key={`habba-${i}`}
    ref={(el) => (habbaRefs.current[i] = el)}
    className="layer layer-habba"
    style={{ backgroundImage: `url(${img})`, zIndex: 30 + i }}
  />
))}

{/* VTU layers */}
{vtuImages.map((img, i) => (
  <div
    key={`vtu-${i}`}
    ref={(el) => (vtuRefs.current[i] = el)}
    className="layer layer-vtu"
    style={{
      backgroundImage: `url(${img})`,
      zIndex: 10 + i,
    }}
  />
))}

        {/* Front static LIBRARY */}
        <div
          className="layer layer-i z-50"
          style={{
            backgroundImage: `url(${
              window.innerWidth < 768 ? IMAGES.MLIBRARY : IMAGES.LIBRARY
            })`,
          }}
        />
      </div>
    </section>
  );
}
