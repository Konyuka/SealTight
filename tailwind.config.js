/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        edblue: "#4F536C",
        edpurple: "#EA703B",
        edyellow: "#EA703B",
        edoffwhite: "#FAF9F6",
        edgray: "#4F536C",
        edgray2: "#445375",
      },

      fontFamily: {
        poppins: ['"Lato", serif'],
      },

      keyframes: {
        borderFade: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.1)", opacity: "0" },
        },
      },

      animation: {
        borderFade: "borderFade 1.5s linear infinite",
      },
    },
    screens: {
      xxxxl: { max: "1880px" },
      // => @media (max-width: 1880px) { ... }

      xxxl: { max: "1799px" },
      // => @media (max-width: 1799px) { ... }

      xxl: { max: "1599px" },
      // => @media (max-width: 1599px) { ... }

      xl: { max: "1399px" },
      // => @media (max-width: 1399px) { ... }

      lg: { max: "1199px" },
      // => @media (max-width: 1199px) { ... }

      md: { max: "991px" },
      // => @media (max-width: 991px) { ... }

      sm: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      xs: { max: "575px" },
      // => @media (max-width: 575px) { ... }

      xxs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

