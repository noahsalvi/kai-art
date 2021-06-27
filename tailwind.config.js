import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1c1c1c",
        background: "#f5f5f5",
        gray: "#808080",
        white: "white",
        smoke: "whitesmoke",
        black: "black",
      },
    },
    fontFamily: {
      sans: ["Cinzel Decorative", "serif"],
    },
  },
});
