# 🌐 Website Decay Simulation

A haunting, interactive web experience that explores digital entropy and the inevitable decay of the internet. This project transforms a clean, minimal website into a progressively corrupted, glitchy, and chaotic digital landscape—alive and dying simultaneously.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/777ryangoslings-projects/v0-website-decay-simulation)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev)

## 🎨 Concept

This project explores four interconnected themes of digital decay:

### 1. **The Internet's Final Page**
The website experiences progressive DOM corruption. Every interaction clicks, scrolls and typing accelerates the decay. The page remembers its destruction between visits, creating a persistent sense of inevitable collapse.

### 2. **The Web That Feels**
The interface reacts emotionally to user behavior:
- **Fast mouse movement** → Red flicker (anxiety)
- **Idle time** → Grayscale fade (loneliness)
- **Typing** → Tremors and distortion (nervous energy)
- **Scrolling** → Increased entropy (chaos spreading)

### 3. **Recursive Web**
Click "Recurse" to spawn nested, corrupted versions of the site. Each layer is more distorted than the last, creating an infinite descent into digital chaos. A poetic representation of the web's self-referential nature.

### 4. **Entropy**
The core mechanic: progressive visual decay over time. The page starts clean and minimal, then gradually deteriorates with:
- Text flicker and character corruption
- RGB channel separation
- Scan line artifacts
- Noise overlays
- Color shifts and saturation loss
- Blur and distortion effects

## ✨ Features

### Visual Effects
- **Text Flicker**: Letters randomly disappear and reappear with glitch artifacts
- **RGB Distortion**: Color channels separate and shift, creating chromatic aberration
- **Scan Lines**: Horizontal lines sweep across the page like old CRT monitors
- **Noise Overlay**: Dynamic canvas-based static that intensifies with decay
- **Distortion Blocks**: Random rectangular glitches appear and disappear
- **Vertical Glitch Lines**: Colored lines tear through the interface
- **Character Corruption**: Text becomes unreadable as entropy increases

### Interactive Elements
- **Click to Corrupt**: Every click accelerates entropy decay
- **Scroll to Decay**: Scrolling increases visual corruption
- **Floating Memories**: Ghost text fragments float up from the void: fragments of the old web
- **Emotional Reactions**: UI responds to mouse speed, typing, and idle time
- **Recursive Nesting**: Spawn infinite layers of corrupted versions
- **Reset Button**: Start the cycle over (entropy persists in localStorage)

### Persistence
- Entropy level is saved to localStorage
- Decay continues between page visits
- The website "remembers" its corruption
- Creates a sense of inevitable, unstoppable degradation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/777ryangoslings/website-decay-simulation.git
   cd website-decay-simulation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F777ryangoslings%2Fwebsite-decay-simulation)

Or deploy manually:
```bash
npm run build
npm run start
```

## 📁 Project Structure

```
website-decay-simulation/
├── app/
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Main page with entropy system
│   └── globals.css          # Global styles and animations
├── components/
│   ├── entropy-content.tsx  # Main content with decay effects
│   ├── glitch-layer.tsx     # Multi-layer glitch effects
│   ├── noise-overlay.tsx    # Canvas-based noise generator
│   ├── floating-memories.tsx # Ghost text fragments
│   ├── emotional-ui.tsx     # Behavior-reactive UI
│   └── recursive-windows.tsx # Nested corrupted versions
├── public/                  # Static assets
└── README.md               # This file
```

## 🎮 How to Interact

1. **Observe**: Watch the page gradually decay over time
2. **Click**: Accelerate entropy with mouse clicks
3. **Scroll**: Increase corruption by scrolling
4. **Type**: Trigger emotional reactions and tremors
5. **Move Mouse**: Fast movement causes anxiety (red flicker)
6. **Go Idle**: Loneliness sets in (grayscale fade)
7. **Recurse**: Click "Recurse" to spawn nested corrupted versions
8. **Reset**: Click "Reset Entropy" to start over

## 🛠️ Technical Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: CSS keyframes + Canvas API
- **Storage**: localStorage for persistence
- **Fonts**: Geist (sans-serif) + Geist Mono (monospace)

## 🎨 Design Philosophy

The project follows a minimalist-to-chaotic design progression:
- **Start**: Clean, white, minimal typography
- **Middle**: Subtle glitches, slight color shifts
- **End**: Complete visual chaos, unreadable text, overwhelming effects

Color palette:
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accents**: Red (#FF0000), Cyan (#00FFFF), Magenta (#FF00FF)
- **Neutral**: Gray (#808080)

## 📊 Entropy Levels

The decay is divided into stages:

| Level | State | Effects |
|-------|-------|---------|
| 0-20% | Clean | Minimal glitches, subtle flicker |
| 20-40% | Degrading | Increased text corruption, color shifts |
| 40-60% | Corrupting | Heavy RGB distortion, scan lines |
| 60-80% | Failing | Aggressive noise, distortion blocks |
| 80-100% | Chaos | Complete visual breakdown, unreadable |

## 🔧 Customization

### Adjust Decay Speed
Edit `components/entropy-content.tsx`:
```tsx
const ENTROPY_INCREMENT = 0.001; // Increase for faster decay
```

### Change Colors
Edit `app/globals.css` and modify the glitch color variables:
```css
--glitch-red: #FF0000;
--glitch-cyan: #00FFFF;
--glitch-magenta: #FF00FF;
```

### Modify Effects
Each effect is in its own component:
- `glitch-layer.tsx` - Visual distortions
- `noise-overlay.tsx` - Static and noise
- `floating-memories.tsx` - Ghost text
- `emotional-ui.tsx` - Behavior reactions

## 🎬 Performance

- Optimized canvas rendering for noise overlay
- Efficient CSS animations with GPU acceleration
- Lazy-loaded recursive windows
- Minimal re-renders with React hooks

## 📝 License

MIT License - feel free to use this project for your own explorations of digital decay.

## 🙏 Credits

Created By Shreyash Srivastva

Inspired by concepts of digital entropy, cyberpunk aesthetics, and the inevitable decay of all systems.

## 🔗 Links

- **Live Demo**: [https://website-decay-simulation.vercel.app](https://website-decay-simulation.vercel.app)
- **GitHub**: [https://github.com/777ryangoslings/website-decay-simulation](https://github.com/777ryangoslings/website-decay-simulation)

---

**Start clean. End chaotic.** 🌐💀
