import React from "react";
import { motion } from "motion/react";

export default function MCU_Charatcters({ name, onMouseEnter, onMouseLeave }) {
  return (
    <>
      <motion.div
        className="transition-colors duration-300 hover:text-slate-900 cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        whileHover={{ scale: 1.2 }}
      >
        {name.toUpperCase()}
      </motion.div>
    </>
  );
}
