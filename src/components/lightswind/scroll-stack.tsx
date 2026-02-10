"use client";
import React, { useRef, useEffect, useState } from "react";

const HOLD_SCROLL_MULTIPLIER = 1.0;

const ScrollStack = ({ cards }) => {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const [active, setActive] = useState(0);

  /* ---------------- SCROLL LOGIC ---------------- */
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;

      const totalScrollable = viewport * cards.length * 0.7;

      const progress = Math.min(
        Math.max(-rect.top / totalScrollable, 0),
        0.999
      );

      const index = Math.min(
        Math.floor(progress * cards.length),
        cards.length - 1
      );

      setActive(index);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [cards.length]);

  /* ---------------- VIDEO CONTROL ---------------- */
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === active) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active]);

  /* ---------------- RENDER ---------------- */
  return (
    <section
      ref={sectionRef}
      style={{
        height: `${(cards.length + HOLD_SCROLL_MULTIPLIER) * 100}vh`,
      }}
      className="relative"
    >
      {/* PINNED AREA */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* CARD STACK */}
        <div className="relative w-[100%] h-[90vh] ">
          {cards.map((card, index) => {
            const isVisible = index <= active;

            return (
              <div
                key={index}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  transform: `
                    translateY(${isVisible ? index * 28 : 140}px)
                    scale(${0.9 + index * 0.03})
                  `,
                  opacity: isVisible ? 1 : 0,
                  zIndex: 20 + index,
                }}
              >
                {/* IMAGE */}
                {card.type === "image" && (
                  <div
                    className="absolute inset-0 rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.src})` }}
                  />
                )}

                {/* VIDEO */}
                {card.type === "video" && (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={card.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/50 rounded-2xl" />

                {/* CONTENT */}
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
  <h2 className="text-5xl md:text-7xl flex items-center justify-center font-extrabold text-white leading-tight">
    {card.title}
  </h2>

<p
  className={`text-lg font-medium text-white/90 max-w-3xl ${
    card.message ? "mt-10" : ""
  }`}
>
  {card.message}
</p>

</div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
