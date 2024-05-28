/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  screens: {
    mobile: "520px",
    tablet: "640px",

    laptop: "1024px",

    desktop: "1280px",
  },
  colors: {
    white: "#FFFFFF",
    "green-normal":"#1E8776",
    "green-100": "#89BFAB",
    "green-200": "#5A8F7B",
    "green-300": "#346E56",
    "yellow-100": "#F9D379",
    "yellow-200": "#FEBB40",
    "yellow-300": "#DF9800",
    "red-100": "#FFA5A5",
    "red-200": "#F43518",
    "red-300": "#B71800",
    "red-400": "#EB0F0F",
    "gray-200": "#F9F9F9",
    "gray-300": "#BFBFBF",
    "gray-400": "#9B9B9B",
    "gray-500": "#777676",
    "gray-600": "#535252",
    "gray-700": "#2F2E2E",
  },
  fontFamily: {
    jkt: ["var(--font-jkt-sans)"],
    dm: ["var(--font-dm-sans)"],
    raleway: ["var(--font-raleway)"],
    inter:["var(--font-inter)"],
  },
});
