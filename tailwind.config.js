/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans:["Inter", "sans-serif"]
      },
      colors: {
        primary: "#4a6cf7",
        secondary: "#1d2144",
        dark: "#000000",
        very_dark: "#fbb040",
        gray: "#959cb1",
        light_gray: "#959cb1",
        light_yellow: "#eeeeee",
        yellow : "#fbb040"
      },
      boxShadow: {
        custom: "0px 5px 10px rgba(4,10,34,0.2)"
      }
    },
  },
  plugins: [],
}

