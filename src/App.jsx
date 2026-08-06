import React, { useState } from "react";
import MCU_Charatcters from "./components/MCU_Charatcters";

export default function App() {
  const characters = [
    "Scarlet Witch",
    "Spider-Man",
    "Fantastic Four",
    "Avengers",
  ];
  return (
    <main>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4  text-4xl font-bold text-slate-500">
        {characters.map((character) => (
          <MCU_Charatcters key={character} name={character} />
        ))}
      </div>
    </main>
  );
}
