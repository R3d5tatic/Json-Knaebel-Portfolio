# STYLES.md

Design system for Jason Knaebel's Electrical Engineering Portfolio.
React + TypeScript | Military / Circuits / Cyber Theme

---

## Design Philosophy

A tactical, precision-driven aesthetic inspired by:
- **Military discipline** - Sharp corners, structured grids, mission-critical clarity
- **Circuit boards** - PCB traces, solder masks, connection nodes
- **Cyber/terminal** - Monospace type, glowing accents, immersive animations

The design prioritizes **function over decoration** while maintaining an immersive, futuristic feel.

---

## Color System

### CSS Custom Properties

```css
:root {
  /* Background - Tactical Dark */
  --bg-primary: #0a0a0f;
  --bg-secondary: #12141a;
  --bg-tertiary: #1a1d24;
  --bg-elevated: #22262f;

  /* Accent - Circuit Inspired */
  --accent-primary: #00d4ff;      /* Electric cyan - primary CTAs, links */
  --accent-secondary: #00ff88;    /* Circuit green - success, active states */
  --accent-tertiary: #d4a574;     /* Copper gold - highlights, badges */
  --accent-warning: #ff4444;      /* PCB red - alerts, errors */
  --accent-muted: #4a5568;        /* Dimmed accent for borders */

  /* Text */
  --text-primary: #e8e8e8;
  --text-secondary: #888899;
  --text-muted: #555566;
  --text-inverse: #0a0a0f;

  /* Glow Effects */
  --glow-cyan: rgba(0, 212, 255, 0.4);
  --glow-green: rgba(0, 255, 136, 0.4);
  --glow-gold: rgba(212, 165, 116, 0.4);

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-accent: rgba(0, 212, 255, 0.3);
}
```

### Semantic Color Usage

| Purpose | Variable | Hex |
|---------|----------|-----|
| Page background | `--bg-primary` | #0a0a0f |
| Card/panel surface | `--bg-secondary` | #12141a |
| Elevated elements | `--bg-tertiary` | #1a1d24 |
| Primary actions | `--accent-primary` | #00d4ff |
| Success/active | `--accent-secondary` | #00ff88 |
| Highlights/badges | `--accent-tertiary` | #d4a574 |
| Errors/warnings | `--accent-warning` | #ff4444 |

---

## Typography

### Font Stack

```css
:root {
  --font-mono: "JetBrains Mono", "Fira Code", "SF Mono", "Consolas", monospace;
}

* {
  font-family: var(--font-mono);
}
```

### Installation

```bash
npm install @fontsource/jetbrains-mono
```

```tsx
// App.tsx or index.tsx
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
```

### Type Scale

```css
:root {
  /* Size */
  --text-hero: 4rem;      /* 64px - Landing hero */
  --text-h1: 2.5rem;      /* 40px - Page titles */
  --text-h2: 1.75rem;     /* 28px - Section headers */
  --text-h3: 1.25rem;     /* 20px - Card titles */
  --text-body: 1rem;      /* 16px - Body text */
  --text-caption: 0.875rem; /* 14px - Labels, meta */
  --text-small: 0.75rem;  /* 12px - Fine print */

  /* Weight */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-bold: 700;

  /* Line Height */
  --leading-tight: 1.2;
  --leading-normal: 1.6;
  --leading-loose: 1.8;

  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-wider: 0.1em;
}
```

### Typography Classes

```css
.text-hero {
  font-size: var(--text-hero);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.text-section-label {
  font-size: var(--text-caption);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--accent-primary);
}

.text-terminal {
  font-size: var(--text-body);
  color: var(--accent-secondary);
}

.text-terminal::before {
  content: "> ";
  color: var(--accent-primary);
}
```

---

## Spacing & Layout

### Spacing Scale

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

### Grid System

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}
```

### Responsive Breakpoints

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

```tsx
// Tailwind-style usage
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};
```

---

## Visual Effects

### Glowing Box Shadows

```css
.glow-cyan {
  box-shadow:
    0 0 20px var(--glow-cyan),
    0 0 40px rgba(0, 212, 255, 0.2),
    inset 0 0 20px rgba(0, 212, 255, 0.05);
}

.glow-cyan-subtle {
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);
}

.glow-green {
  box-shadow: 0 0 20px var(--glow-green);
}

.glow-gold {
  box-shadow: 0 0 20px var(--glow-gold);
}
```

### Text Glow

```css
.text-glow {
  text-shadow:
    0 0 10px var(--glow-cyan),
    0 0 20px rgba(0, 212, 255, 0.3);
}
```

### Scanline Overlay

```css
.scanlines::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.1) 2px,
    rgba(0, 0, 0, 0.1) 4px
  );
  pointer-events: none;
  opacity: 0.3;
}
```

### Circuit Grid Background

```css
.circuit-grid {
  background-image:
    linear-gradient(var(--border-subtle) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px);
  background-size: 40px 40px;
}

.circuit-dots {
  background-image: radial-gradient(
    circle,
    var(--accent-primary) 1px,
    transparent 1px
  );
  background-size: 40px 40px;
  opacity: 0.15;
}
```

### Gradient Overlays

```css
.gradient-fade-bottom {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--bg-primary) 100%
  );
}

.gradient-accent {
  background: linear-gradient(
    135deg,
    var(--accent-primary) 0%,
    var(--accent-secondary) 100%
  );
}
```

---

## Animation Keyframes

### Typing Cursor

```css
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: var(--accent-primary);
  margin-left: 4px;
  animation: blink 1s step-end infinite;
}
```

### Glitch Effect

```css
@keyframes glitch {
  0%, 100% {
    transform: translate(0);
    text-shadow: none;
  }
  20% {
    transform: translate(-2px, 2px);
    text-shadow: 2px 0 var(--accent-warning), -2px 0 var(--accent-primary);
  }
  40% {
    transform: translate(2px, -2px);
    text-shadow: -2px 0 var(--accent-warning), 2px 0 var(--accent-primary);
  }
  60% {
    transform: translate(-1px, 1px);
    text-shadow: 1px 0 var(--accent-secondary);
  }
}

.glitch:hover {
  animation: glitch 0.3s ease-in-out;
}
```

### Circuit Trace Draw

```css
@keyframes trace-draw {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.circuit-trace {
  stroke: var(--accent-primary);
  stroke-width: 2;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  fill: none;
}

.circuit-trace.animate {
  animation: trace-draw 2s ease-out forwards;
}
```

### Glow Pulse

```css
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px var(--glow-cyan);
  }
  50% {
    box-shadow:
      0 0 30px var(--glow-cyan),
      0 0 60px rgba(0, 212, 255, 0.3);
  }
}

.pulse-glow {
  animation: glow-pulse 2s ease-in-out infinite;
}
```

### Scanline Animation

```css
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

.scanline-moving::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--accent-primary),
    transparent
  );
  opacity: 0.1;
  animation: scanline 8s linear infinite;
  pointer-events: none;
}
```

### Fade In Up

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fade-in-up 0.5s ease-out forwards;
}
```

### Stagger Delay Utilities

```css
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
```

---

## Component Patterns

### Card / Panel

```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: var(--space-6);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--border-accent);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.card-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-secondary);
  box-shadow: 0 0 10px var(--glow-green);
}
```

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--accent-primary);
  color: var(--text-inverse);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: var(--space-3) var(--space-6);
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  box-shadow: 0 0 20px var(--glow-cyan);
  transform: translateY(-2px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--accent-primary);
  border: 1px solid var(--accent-primary);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: var(--space-3) var(--space-6);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(0, 212, 255, 0.1);
  box-shadow: 0 0 15px var(--glow-cyan);
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: var(--text-primary);
  border: none;
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  padding: var(--space-2) var(--space-4);
  cursor: pointer;
  position: relative;
}

.btn-ghost::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent-primary);
  transition: width 0.3s ease;
}

.btn-ghost:hover::after {
  width: 100%;
}
```

### Navigation

```css
.nav {
  display: flex;
  gap: var(--space-8);
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--border-subtle);
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: var(--space-2) 0;
  position: relative;
  transition: color 0.2s ease;
}

.nav-link::before {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-primary);
  box-shadow: 0 0 10px var(--glow-cyan);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--accent-primary);
}

.nav-link.active::before,
.nav-link:hover::before {
  width: 100%;
}
```

### Badge / Tag

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: rgba(0, 212, 255, 0.1);
  color: var(--accent-primary);
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: var(--space-1) var(--space-3);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 2px;
}

.badge-gold {
  background: rgba(212, 165, 116, 0.1);
  color: var(--accent-tertiary);
  border-color: rgba(212, 165, 116, 0.3);
}

.badge-green {
  background: rgba(0, 255, 136, 0.1);
  color: var(--accent-secondary);
  border-color: rgba(0, 255, 136, 0.3);
}
```

### Section Divider

```css
.divider {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin: var(--space-16) 0;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--border-accent),
    transparent
  );
}

.divider-node {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  transform: rotate(45deg);
  box-shadow: 0 0 10px var(--glow-cyan);
}
```

---

## Tailwind Configuration

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0f",
          secondary: "#12141a",
          tertiary: "#1a1d24",
          elevated: "#22262f",
        },
        accent: {
          cyan: "#00d4ff",
          green: "#00ff88",
          gold: "#d4a574",
          red: "#ff4444",
        },
        text: {
          primary: "#e8e8e8",
          secondary: "#888899",
          muted: "#555566",
        },
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "SF Mono",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.2" }],
        h1: ["2.5rem", { lineHeight: "1.2" }],
        h2: ["1.75rem", { lineHeight: "1.3" }],
        h3: ["1.25rem", { lineHeight: "1.4" }],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 212, 255, 0.4)",
        "glow-lg": "0 0 40px rgba(0, 212, 255, 0.4)",
        "glow-green": "0 0 20px rgba(0, 255, 136, 0.4)",
        "glow-gold": "0 0 20px rgba(212, 165, 116, 0.4)",
      },
      borderRadius: {
        tactical: "2px",
        panel: "4px",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        glitch: "glitch 0.3s ease-in-out",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(2px, -2px)" },
          "60%": { transform: "translate(-1px, 1px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Recommended Dependencies

```bash
# Typography
npm install @fontsource/jetbrains-mono

# Animations
npm install framer-motion

# Particles (optional - for immersive background)
npm install @tsparticles/react @tsparticles/slim
```

### Particle Configuration

```tsx
// components/ParticleBackground.tsx
import Particles from "@tsparticles/react";

export const particleOptions = {
  particles: {
    number: { value: 60 },
    color: { value: "#00d4ff" },
    opacity: { value: 0.3 },
    size: { value: 2 },
    move: {
      enable: true,
      speed: 0.5,
    },
    links: {
      enable: true,
      distance: 150,
      color: "#00d4ff",
      opacity: 0.15,
    },
  },
};
```

---

## Utility Classes Summary

| Class | Purpose |
|-------|---------|
| `.glow-cyan` | Cyan box shadow glow |
| `.text-glow` | Glowing text effect |
| `.scanlines` | CRT scanline overlay |
| `.circuit-grid` | Grid background pattern |
| `.circuit-dots` | Dot grid background |
| `.glitch` | Glitch effect on hover |
| `.pulse-glow` | Pulsing glow animation |
| `.fade-in-up` | Fade in from below |
| `.text-terminal` | Terminal-style text with prompt |
| `.text-section-label` | Uppercase section labels |

---

## Quick Reference

### Primary Accent
`#00d4ff` - Electric Cyan

### Key Effects
- Sharp corners (2-4px radius)
- Cyan glow on interactive elements
- Scanline overlays
- Particle backgrounds
- Circuit trace animations

### Typography
JetBrains Mono everywhere
