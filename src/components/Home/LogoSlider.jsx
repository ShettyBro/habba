import React, { useEffect, useRef, useState } from "react";
import "./logoSlider.css";

export default function LogoSlider({ logos = [] }) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [show, setShow] = useState(false);

  /* -------- Reveal on scroll (like text animation) -------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.35 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* -------- Detect center logo -------- */
  useEffect(() => {
    const checkCenter = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const itemCenter = r.left + r.width / 2;

        if (Math.abs(centerX - itemCenter) < r.width / 2) {
          setActiveIndex(i);
        }
      });
    };

    const interval = setInterval(checkCenter, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`logo-slider-reveal ${show ? "show" : ""}`}
    >
      <div className="logo-slider">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`logo-item ${
                activeIndex === i ? "active" : ""
              }`}
            >
              <img src={logo} alt="sponsor" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
