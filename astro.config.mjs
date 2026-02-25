// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  base: "/",
  vite: {
    ssr: {
      external: ["svgo"],
    },
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
        "@/types": new URL("./src/types", import.meta.url).pathname,
        "@/config": new URL("./src/config", import.meta.url).pathname,
        "@/components": new URL("./src/components", import.meta.url).pathname,
        "@/layouts": new URL("./src/layouts", import.meta.url).pathname,
        "@/utils": new URL("./src/utils", import.meta.url).pathname,
        "@/data": new URL("./src/data", import.meta.url).pathname,
      },
    },
  },
});
