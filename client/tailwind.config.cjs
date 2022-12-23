/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      lgGrid: "1140px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        secondary: {
          dark: "#028158",
          DEFAULT: "#01b37a",
          mid: "#00AB74",
          withOpacity: "rgba(1, 179, 122, 0.13)",
        },
        primary: "#E97F0E",
        background: "#F3F3F3",
        red: "#F03A47",
        borderGray: "rgba(34, 36, 46, 0.31)",
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
        chooseLab: "2fr 1fr 1fr",
        chooseLab2: "25% 75%",
        chooseLab4: "40% 15% 15% 15%",
        chooseLab5: "40% 15% 15% 15% 15%",
        selectedLab2: "2fr 1fr",
        labPaymentReminder: "1.2fr 0.8fr 1fr 1fr 1fr",
        manageLabs: "1.5fr 1fr 1fr 1fr 1fr",
        sidebarSetGrid: "1fr 3fr",
      },
      boxShadow: {
        summary: "0px 4px 22px rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [],
}
