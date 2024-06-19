import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      firebrick: {
        0: "#B40D1A",
        1: "#C7141A"
      },
      whitesmoke: "#F2ECE9",
      floralwhite: "#FFFCF7",
      gray: "#808080",
      darkgray: "#99A9A9",
      slategray: "#5F5F75",
      darkslategray: "#404040",
      silver: "#C3C3C3",
      dimgray: "#666666",
      oldlace: "#F5EFE0",
      crimson: "#D30D19",
      white: "#FFFFFF",
      darkseagreen: "#9DBC98",
      lightpink: "#E89494"
    }
  },
  plugins: [],
};
export default config;
