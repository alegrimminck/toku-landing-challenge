/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-violet": "#5c0083",
        "soft-violet": "#7f00ae",
        "dark-gray": "#373737",
        "soft-gray": "#eeebf1",
        "very-soft-gary": "#f2f2f2",
        gray: "#eceaef",
        "button-gray": "rgb(239,239,239)",
        "button-text-gray": "#8b878e",
      },
      fontFamily: {
        toku: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
