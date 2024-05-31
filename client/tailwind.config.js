/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Saira",
      secondary: "Poppins",
      logoTitle: "Saira Stencil One",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
        // lg: '3rem',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#40F3FF",
        second: "#f9f6f1",
        third: "#82F9BF",
        four: "#61c8f6",
        five: "#67ae5c",
        six: "#487b41",
        accent: {
          1: "#61c8f6",
          2: "#BB4D78",
        },
        grey: {
          DEFAULT: "#919297",
          1: "#b5b6bd",
          2: "#E7E9EB",
          3: "#F5F5F5",
          4: "#F6F6F6",
          5: "#eef0f2",
        },
        white: "#fff",
      },
    },
  },
  plugins: [],
};
