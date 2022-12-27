/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#cf3549",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
