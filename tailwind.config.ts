import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#2cc8d3",
          50: "#f0fdff",
          100: "#ccfbfe",
          200: "#9ff6fc",
          300: "#66ecf5",
          400: "#2cc8d3",
          500: "#1cb5c0",
          600: "#1a92a0",
          700: "#1c7481",
          800: "#1e5f6a",
          900: "#1d505a",
        },
        gray: {
          750: "#1f2937", // 確実に黒に近いグレー（gray-800より少し暗い）
        },
      },
    },
  },
  plugins: [],
};
export default config;
