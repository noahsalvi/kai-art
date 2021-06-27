import preprocess from "svelte-preprocess";
import WindiCSS from "vite-plugin-windicss";
import netlify from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: netlify(),
    target: "#svelte",
    vite: () => ({
      plugins: [WindiCSS.default()],
      optimizeDeps: {
        include: ["prismjs", "katex"],
      },
    }),
  },
};

export default config;
