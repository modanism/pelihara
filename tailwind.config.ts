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
    },
    colors: {
      "green-100":"#89BFAB",
      "green-200":"#5A8F7B",
      "green-300":"#346E56",
      "yellow-100":"#F9D379",
      "yellow-200":"#FEBB40",
      "yellow-300":"#DF9800",
      "red-100":"#FFA5A5",
      "red-200":"#F43518",
      "red-300":"#B71800",
      "gray-200":"#F9F9F9",
      "gray-300":"#BFBFBF",
      "gray-400":"#9B9B9B",
      "gray-500":"#777676",
      "gray-600":"#535252",
      "gray-700":"#2F2E2E",
    },
  },
  plugins: [],
};
export default config;
