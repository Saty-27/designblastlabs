/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blast: {
          orange: "#FF4F17",
          "orange-hover": "#E5420F",
          "orange-light": "rgba(255, 79, 23, 0.08)",
          black: "#0E1018",
          dark: "#141722",
          surface: "#1A1E2B",
          border: "#252A3B",
          subtle: "#767C8D",
          light: "#F7F8FA",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        archivo: ["var(--font-archivo)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1320px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        wideDisplay: "0.08em",
      },
    },
  },
  plugins: [],
};
