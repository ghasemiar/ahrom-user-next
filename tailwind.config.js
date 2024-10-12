/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  layers: {
    "no-tailwindcss": {
      // Add any styles you want to disable here
      ".no-tailwindcss": {
        all: "unset",
      },
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "lvl-1-desktop": "38px",
        "lvl-2-desktop": "19px",
        "lvl-3-desktop": "12px",
        "lvl-1-tablet": "32px",
        "lvl-2-tablet": "16px",
        "lvl-3-tablet": "8px",
        "lvl-1-mobile": "20px",
        "lvl-2-mobile": "10px",
        "lvl-3-mobile": "5px",
      },
      colors: {
        primary: {
          0: "#000",
          10: "#211824",
          20: "#3F2D42",
          30: "#5E375F",
          40: "#7C416E",
          50: "#9B4A7E",
          DEFAULT: "#cdb4db",
          70: "#DAA6DC",
          80: "#E79BE2",
          90: "#F491E7",
          95: "#F8A8EB",
          99: "#FCDDF4",
          100: "#fff",
        },
        secondary: {
          0: "#000",
          10: "#241D1E",
          20: "#4E3A3F",
          30: "#795758",
          40: "#A37776",
          50: "#CD947E",
          DEFAULT: "#ffc8dd",
          70: "#FFAAC2",
          80: "#FF8FAF",
          90: "#FF74A0",
          95: "#FF6299",
          99: "#FFD4E9",
          100: "#fff",
        },
        accent: {
          0: "#000",
          10: "#002325",
          20: "#013C3E",
          30: "#026468",
          40: "#039FA6",
          50: "#04C7D0",
          DEFAULT: "#a2d2ff",
          70: "#68DDE3",
          80: "#82E3E8",
          90: "#B4EEF1",
          95: "#B4EEF1",
          99: "#EFFCFD",
          100: "#fff",
        },
        "surface-light": {
          DEFAULT: "#caf0f8",
          1: "#dbf4fa",
          2: "#e6f8fb",
          3: "#f0fafa",
          4: "#ffffff",
        },
        "surface-dark": {
          DEFAULT: "#415a77",
          1: "#364d69",
          2: "#2c405b",
          3: "#212b4d",
          4: "#16203f",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
