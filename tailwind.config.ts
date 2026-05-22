import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Lustre Spa luxury palette
        ivory: {
          50: "#FBF8F2",
          100: "#F6F1E7",
          200: "#EFE7D5",
          300: "#E5D9BD",
        },
        sand: {
          50: "#F3EBDA",
          100: "#E8DDC4",
          200: "#D8C9A5",
          300: "#C4B083",
        },
        champagne: {
          DEFAULT: "#C9A875",
          light: "#D9BE94",
          dark: "#9C7E50",
        },
        forest: {
          // Dark elegant green from the logo
          DEFAULT: "#1F3B33",
          deep: "#152821",
          light: "#345349",
          mid: "#28473D",
        },
        rose: {
          nude: "#E7CFC4",
          dusty: "#D7B5A6",
        },
      },
      fontFamily: {
        // Serif (display) — luxury editorial
        display: ["var(--font-display)", "Cormorant Garamond", "Times New Roman", "serif"],
        // Sans — modern body
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        // Arabic
        arabic: ["var(--font-arabic)", "Cairo", "Tajawal", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "luxe": "0.18em",
        "luxe-sm": "0.12em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(.21,.6,.35,1) both",
        "soft-float": "soft-float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      boxShadow: {
        "luxe": "0 20px 50px -20px rgba(31, 59, 51, 0.16), 0 12px 28px -12px rgba(31, 59, 51, 0.08)",
        "luxe-sm": "0 8px 24px -10px rgba(31, 59, 51, 0.12)",
      },
      backgroundImage: {
        // Lightweight noise: 1 octave only, smaller canvas — less GPU work
        "noise": "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='1' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.45'/></svg>\")",
      },
    },
  },
  plugins: [],
};

export default config;
