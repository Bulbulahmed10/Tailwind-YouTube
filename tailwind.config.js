/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif", "Oswald"],
        oswald: ["Oswald", "Roboto"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],

  variants: {
    scrollbar: ["rounded"],
  },
};




