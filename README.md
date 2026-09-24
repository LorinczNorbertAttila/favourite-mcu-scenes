# Favourite MCU Scenes

An interactive React project for exploring favourite Marvel Cinematic Universe scenes. Hover over a character to reveal related video previews, animated transitions, and an SVG illustration for the selected character.

## Project purpose

This project was created primarily to learn and experiment with **Framer Motion**. It explores Motion for React through:

- hover interactions and scale animations;
- entering and exiting elements with `AnimatePresence`;
- animated position and rotation changes;
- SVG path drawing with `pathLength`.

## Features

- Interactive MCU character list;
- animated video previews on hover;
- multiple scenes for each character;
- animated SVG illustration for the active character;
- responsive layout styled with Tailwind CSS.

## Tech stack

- React 19
- Vite
- Motion for React (`motion/react`)
- Tailwind CSS 4
- JavaScript with ES modules

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone <repository-url>
cd favourite-mcu-scenes
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Project structure

```text
src/
├── App.jsx                         # Main application and scene data
├── index.css                       # Global styles and Tailwind import
├── main.jsx                        # React entry point
└── components/
	├── MCU_Charatcters.jsx         # Interactive character labels
	├── ScenePreview.jsx             # Animated video previews
	└── SVG_animation.jsx            # Active character SVG animation
public/
└── *.mp4                           # Scene video files
```
## Preview

<video src="public/preview.mp4" autoplay loop muted playsinline width="800"></video>

## Disclaimer

This is a fan-made project created for learning and demonstration purposes. Marvel characters, logos, videos, and related materials belong to their respective owners.
