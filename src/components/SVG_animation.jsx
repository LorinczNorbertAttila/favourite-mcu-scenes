import { motion } from "motion/react";

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default function SVGAnimation({ characters, hoveredId }) {
  const character = characters.find(
    (item) => item.id === hoveredId,
  );

  return (
  <div className="absolute left-1/2 top-full mt-4 h-24 w-24 -translate-x-1/2">
    {character && (
      <svg
        className="h-full w-full"
        viewBox={
          character.name === "Fantastic Four"
            ? "-10 -10 210 200"
            : character.name === "Avengers"
              ? "-10 -10 210 260"
              : "0 0 96 96"
        }
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          key={character.id}
          d={character.svg}
          fill="none"
          stroke={character.strokeColor || "black"}
          strokeWidth={character.strokeWidth || 1}
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    )}
  </div>
);
}