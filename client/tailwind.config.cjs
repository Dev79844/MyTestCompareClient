/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
