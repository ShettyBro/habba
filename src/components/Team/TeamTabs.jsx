import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const tabs = ["faculty", "technical", "coordinator"];

export default function TeamTabs({ activeTab, setActiveTab }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoverTab, setHoverTab] = useState(null);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.9 }}
      className="
        relative flex w-fit mx-auto mb-10
        bg-white/10 backdrop-blur-3xl
        border border-white/20
        rounded-full 
        shadow-[0_0_30px_rgba(0,255,255,0.15)]
      "
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        const isHover = hoverTab === tab;

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            onMouseEnter={() => setHoverTab(tab)}
            onMouseLeave={() => setHoverTab(null)}
            className="relative px-6 py-3 text-sm font-medium capitalize text-white/80 z-10"
          >
            {(isActive || isHover) && (
              <motion.div
                layoutId="lens"
                className="
                  absolute inset-0 rounded-full pointer-events-none z-0
                  bg-[radial-gradient(circle_at_30%_30%, rgba(255,255,255,0.55), rgba(255,255,255,0.12)_55%)]
                  backdrop-blur-[100px] text-black
                  shadow-[inset_0_2px_4px_rgba(255,255,255,0.6), inset_0_-4px_6px_rgba(0,0,0,0.25), 0_12px_35px_rgba(255,255,255,0.45), 0_4px_12px_rgba(0,0,0,0.4)]
                "
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </motion.div>
  );
}
