/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#cf3549",
      },
      boxShadow: {
        commentBox: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      screens: {
        sm2: "550px",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
