/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        secondary: {
          dark: "#028158",
          DEFAULT: "#01b37a",
          mid: "#00AB74",
        },
        primary: "#E97F0E",
        background: "#F3F3F3",
      },
      backgroundImage: {
        mainBg: "url('images/home/mainBg.jpg')",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        summary: "1fr 2fr",
        priceSummary: "1fr 2fr 1fr",
        testPrices: "2fr 80px",
      },
      boxShadow: {
        summary: "0px 4px 22px rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [],
}
