import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../../assets/Images";
import GradientText from "../motion/GradientText";

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const Intro = () => {
  return (
    <div className="w-full container mt-24 mb-40 px-6 md:px-20 py-20 space-y-32 overflow-hidden">
      
      {/* Title */}
      <div className="text-center">
        <GradientText
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          animationSpeed={8}
          showBorder={false}
          className="text-5xl md:text-7xl font-bold"
        >
          About
        </GradientText>
      </div>

      {/* ---------------- HABBA SECTION ---------------- */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <motion.img
          src={IMAGES.GALLERY12}
          alt=""
          className="rounded-3xl w-full"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Text */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl mb-6 font-bold">Habba</h1>
          <p className="text-lg text-justify leading-relaxed text-gray-200">
          Acharya Habba is the grand annual celebration that captures the true spirit, talent, and unity of the Acharya community. It is a dynamic platform where creativity meets opportunity, inspiring students to express themselves, compete with passion, and step into the spotlight. More than just a fest, Habba is a living tradition filled with energy, excitement, and moments that stay with you long after the celebrations end.  </p>
        </motion.div>
      </div>

      {/* ---------------- VTU SECTION ---------------- */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl mb-6 font-bold">VTU Fest</h1>
          <p className="text-lg text-justify leading-relaxed text-gray-200">
          This year, VTU Youth Fest 2026 arrives at Acharya, bringing together the vibrant spirit of youth, culture, and creativity on one spectacular stage. Celebrating tradition while embracing innovation, the fest reflects the passion, diversity, and brilliance of students from across VTU. Join us as Acharya proudly hosts a celebration where talent shines, cultures connect, and the future begins to take shape.</p>
        </motion.div>

        {/* Image */}
        <motion.img
          src={IMAGES.GALLERY12}
          alt=""
          className="rounded-3xl w-full order-1 md:order-2"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Intro;
