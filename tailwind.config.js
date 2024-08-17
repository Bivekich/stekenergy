import { transform } from "typescript";
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    flowbite.content(),
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      minWidth: {
        screen: "100vw",
      },

      minHeight: {
        screen: "100vh",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        underlineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        showRight: {
          "0%": { width: "0rem" },
          "100%": { width: "100rem" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        underlineGrow: "underlineGrow 0.3s ease-in-out forwards",
        showRight: "showRight 0.3 ease-in-out forwards",
        slideInRight: "slideInRight 0.5s ease-in-out forwards",
        slideInLeft: "slideInLeft 1s ease-in-out forwards",
        slideOutRight: "slideOutRight 0.5s ease-in-out forwards",
        slideOutLeft: "slideOutLeft 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
