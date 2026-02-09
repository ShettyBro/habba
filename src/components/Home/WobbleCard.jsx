import React from "react";
import { motion } from "framer-motion";

export const WobbleCard = ({ children, containerClassName = "", className = "" }) => {
  return (
    <motion.div
      className={`${containerClassName} ${className} relative`}
      whileHover={{ scale: 1.01, rotate: [0, 1, -1, 0] }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};
