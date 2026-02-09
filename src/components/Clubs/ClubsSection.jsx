import { motion } from "framer-motion";
import FlipCard from "./FlipCard";
import { EVENTS } from "../../data";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function ClubsSection() {
  return (
    <section className="pb-24 pt-24 md:pt-48 md:pb-32  w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto sm:px-6 lg:px-8">

        {/* TITLE */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-9 md:mb-14 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Clubs & Events
        </motion.h2>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 container mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
        >
          {EVENTS.map((club, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="flex justify-center w-full"
            >
              {/* Card stays centered, scaling won’t overlap */}
              <FlipCard club={club} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
