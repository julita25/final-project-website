module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  fontFamily: {
    Poppins: "Poppins",
    Paprika: "Paprika",
    Inria: "Inria Serif",
  },
  theme: {
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        primary: "#00040f",
        lightPrimary: "#F5F9FD",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};