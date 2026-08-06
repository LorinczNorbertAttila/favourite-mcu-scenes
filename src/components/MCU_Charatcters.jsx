import React from "react";
import { motion } from "motion/react";

export default function MCU_Charatcters({ name }) {
  return (
    <motion.div
      className="transition-colors duration-300 hover:text-slate-900"
      whileHover={{ scale: 1.2 }}
    >
      {name.toUpperCase()}
    </motion.div>
  );
}
