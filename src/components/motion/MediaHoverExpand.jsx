"use client";
import React, { useState, useEffect, useRef } from "react";

const MediaHoverExpand = ({ items, className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef([]);

  /* --------- Detect Mobile --------- */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* --------- Mobile autoplay switching --------- */
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isMobile, items.length]);

  /* --------- Play/Pause logic for BOTH --------- */
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  /* --------- Desktop initial autoplay --------- */
  useEffect(() => {
    if (isMobile) return;

    const firstVideo = videoRefs.current[0];
    firstVideo?.play().catch(() => {});
  }, [isMobile]);

  return (
    <div
      className={`flex w-full gap-2 sm:flex-row flex-col sm:h-96 ${className}`}
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className={`
              relative overflow-hidden rounded-xl cursor-pointer
              transition-all duration-500 ease-in-out

              sm:flex-1 sm:hover:flex-[3]
              sm:h-full
              ${isActive ? "h-64" : "h-20"}
            `}
          >
            {/* IMAGE */}
            {item.type === "image" && (
              <img
                src={item.src}
                alt=""
                className="h-full w-full object-cover"
              />
            )}

            {/* VIDEO */}
            {item.type === "video" && (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.src}
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MediaHoverExpand;
