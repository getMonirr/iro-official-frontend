import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "iro-white": "#FFFFFF",
        "iro-green": "#3A643B",
        "iro-yellow": "#FFD700",
        "iro-light-yellow": "# ",
        "iro-light-green": "#E6F4E0",
        "iro-dark-green": "#2E4D2B",
        "iro-dark-yellow": "#B5A642",
        "iro-bg-green": "#0A3B1E",
        "iro-bg-yellow": "#FFF7E2",
      },
    },
  },
  plugins: [],
};
export default config;
