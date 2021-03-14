module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.svelte"],
    options: {
      safelist: ["flex-row", "flex-row-reverse"],
    },
  },
  theme: {
    colors: {
      accent: "#20252D",
      background: "#F5F5F5",
      gray: "#808080",
      white: "white",
      smoke: "whitesmoke",
      black: "black",
    },
    fontFamily: {
      sans: ["Titillium Web", "sans-serif"],
    },
  },
};
