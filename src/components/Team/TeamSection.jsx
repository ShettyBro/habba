import { useState, useRef } from "react";
import TeamTabs from "./TeamTabs";
import { TEAM } from "../../data";
import { AnimatePresence, motion, useInView } from "framer-motion";
import CardGrid from "./Card";

/* ---------- ANIMATION VARIANTS ---------- */

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const tabVariants = {
  hidden: { opacity: 0, y: 30 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.35, ease: "easeIn" },
  },
};

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("faculty");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-120px",
  });

  return (
    <section ref={sectionRef} className="py-20 text-white overflow-hidden">
      {/* SECTION ENTRANCE */}
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="text-4xl font-bold text-center mb-8"
      >
        Meet The Team
      </motion.h2>

      <TeamTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* TAB CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="hidden"
          animate="enter"
          exit="exit"
          className="max-w-6xl mx-auto px-4 relative"
        >
          <CardGrid cards={TEAM[activeTab]} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
