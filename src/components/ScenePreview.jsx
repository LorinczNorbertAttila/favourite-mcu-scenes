import React from "react";
import { motion } from "motion/react";

export default function ScenePreview({ scenes }) {
  return (
    <>
      {scenes.map((scene, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: 0,
            x: scene.offsetX,
            y: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: scene.rotate,
            x: scene.offsetX,
            y: scene.offsetY,
          }}
          exit={{ opacity: 0, scale: 0.7, y: scene.offsetY + 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute z-50 left-0 bottom-full w-80 h-48 rounded-2xl overflow-hidden pointer-events-none"
        >
          <video
            className="h-full w-full object-cover"
            src={scene.video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </motion.div>
      ))}
    </>
  );
}
