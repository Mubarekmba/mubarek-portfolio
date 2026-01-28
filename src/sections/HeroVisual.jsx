// src/sections/Hero/HeroVisual.jsx
import { motion } from "framer-motion";
import styles from "./HeroVisual.module.css";

export default function HeroVisual() {
  // Common animation variants for drifting elements
  const floatVariant = (delay = 0, duration = 4) => ({
    animate: {
      y: [0, -25, 0],
      x: [0, 10, 0],
      opacity: [0.4, 0.9, 0.4],
      transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
    },
  });

  return (
    <div className={styles.container}>
      {/* 1. Deep Background Glow Layers */}
      <div className={styles.ambientGlow} />
      <div className={styles.coreGlow} />

      <motion.svg
        viewBox="0 0 500 500"
        className={styles.svg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <filter id="superGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 2. Floating "Code" Particles (Background Layer) */}
        <motion.g {...floatVariant(0, 5)} className={styles.codeBits}>
          <text x="50" y="100" className={styles.symbol}>
            {"{ }"}
          </text>
          <text x="400" y="400" className={styles.symbol}>
            {"< />"}
          </text>
          <text x="100" y="420" className={styles.binary}>
            0101
          </text>
        </motion.g>

        <motion.g {...floatVariant(1.5, 7)} className={styles.codeBits}>
          <text x="420" y="150" className={styles.symbol}>
            {"[ ]"}
          </text>
          <text x="60" y="250" className={styles.binary}>
            110
          </text>
          <text x="380" y="320" className={styles.symbol}>
            ;
          </text>
        </motion.g>

        {/* 3. Main Central Terminal Icon */}
        <motion.g
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Terminal Box */}
          <rect
            x="110"
            y="160"
            width="280"
            height="180"
            rx="20"
            className={styles.terminalShell}
          />

          {/* Screen Content with Intense Glow */}
          <g filter="url(#superGlow)">
            {/* Glowing Brackets */}
            <path
              d="M150 220l-15 25 15 25M350 220l15 25-15 25"
              stroke="#8B5CF6"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Pulsing Code Lines */}
            <motion.rect
              x="180"
              y="225"
              width="100"
              height="6"
              rx="3"
              fill="#8B5CF6"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.rect
              x="180"
              y="245"
              width="140"
              height="6"
              rx="3"
              fill="#8B5CF6"
              fillOpacity="0.6"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </g>

          {/* Header Buttons */}
          <circle cx="140" cy="185" r="4" fill="#ff5f56" />
          <circle cx="155" cy="185" r="4" fill="#ffbd2e" />
          <circle cx="170" cy="185" r="4" fill="#27c93f" />
        </motion.g>

        {/* 4. High-Light Floating Data Nodes */}
        <motion.circle
          cx="400"
          cy="220"
          r="8"
          className={styles.node}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.rect
          x="100"
          y="340"
          width="12"
          height="12"
          rx="3"
          className={styles.node}
          animate={{ rotate: 360, x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}
