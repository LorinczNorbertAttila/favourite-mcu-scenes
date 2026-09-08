import React, { useState } from "react";
import MCU_Charatcters from "./components/MCU_Charatcters";
import ScenePreview from "./components/ScenePreview";
import { AnimatePresence } from "motion/react";

export default function App() {
  const characters = [
    {
      id: 1,
      name: "Scarlet Witch",
      scenes: [
        {
          subtitle: "Age of Ultron",
          video: "wanda_age_of_ultron.mp4",
          rotate: -8,
          offsetX: -400,
          offsetY: -10,
        },
        {
          subtitle: "Hex creation",
          video: "wanda_hex_creation.mp4",
          rotate: 4,
          offsetX: 0,
          offsetY: -65,
        },
        {
          subtitle: "Multiverse of Madness",
          video: "multiverse_of_madness.mp4",
          rotate: 12,
          offsetX: 350,
          offsetY: -20,
        },
      ],
    },
    {
      id: 2,
      name: "Spider-Man",
      scenes: [
        {
          subtitle: "Gwen's Death",
          video: "spiderman_gwen.mp4",
          rotate: -10,
          offsetX: -400,
          offsetY: -16,
        },
        {
          subtitle: "Grieving May",
          video: "spiderman_may.mp4",
          rotate: 2,
          offsetX: 10,
          offsetY: -18,
        },
        {
          subtitle: "No Way Home",
          video: "3_spiderman.mp4",
          rotate: 9,
          offsetX: 350,
          offsetY: -145,
        },
      ],
    },
    {
      id: 3,
      name: "Fantastic Four",
      scenes: [
        {
          subtitle: "First Scene",
          video: "fantastic_four.mp4",
          rotate: -10,
          offsetX: -230,
          offsetY: -160,
        },
        {
          subtitle: "Galactus",
          video: "fantastic_four_galactus.mp4",
          rotate: 9,
          offsetX: 340,
          offsetY: -25,
        },
      ],
    },
    {
      id: 4,
      name: "Avengers",
      scenes: [
        {
          subtitle: "The Avengers",
          video: "og_avengers.mp4",
          rotate: -10,
          offsetX: -360,
          offsetY: 10,
        },
        {
          subtitle: "Civil War",
          video: "civil_war.mp4",
          rotate: 2,
          offsetX: 5,
          offsetY: -180,
        },
        {
          subtitle: "Endgame",
          video: "avengers_assamble.mp4",
          rotate: 9,
          offsetX: 360,
          offsetY: -65,
        },
      ],
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-4 text-4xl font-bold text-slate-500">
        {characters.map((character) => (
          <div key={character.id} className="relative w-fit z-0">
            <MCU_Charatcters
              name={character.name}
              onMouseEnter={() => setHoveredId(character.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
            <AnimatePresence>
              {hoveredId === character.id && (
                <ScenePreview scenes={character.scenes} />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </main>
  );
}
