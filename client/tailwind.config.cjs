/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

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
        'mainBg': "url('images/home/mainBg.jpg')",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
