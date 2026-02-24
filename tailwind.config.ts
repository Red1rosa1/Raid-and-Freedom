import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#090b10",
        gold: "#d4af37",
        blood: "#7f1014",
        amber: "#ffcc66",
        text: "#f3f4f6",
        muted: "#a8afb8",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212, 175, 55, 0.45), 0 10px 35px rgba(0, 0, 0, 0.55)",
        card: "0 18px 42px rgba(0, 0, 0, 0.44)",
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
      },
      animation: {
        floaty: "floaty 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 1px rgba(212, 175, 55, 0.35), 0 12px 35px rgba(0, 0, 0, 0.5)" },
          "50%": { boxShadow: "0 0 0 1px rgba(255, 204, 102, 0.8), 0 16px 45px rgba(139, 0, 0, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
