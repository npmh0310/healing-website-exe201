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
        primary: "#f683ac",
        second: "#00BEB9",
        third: "#7382E2",
        accent: {
          1: '#CD5E88',
          2: '#BB4D78'
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
