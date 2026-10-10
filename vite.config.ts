import adapter from "@sveltejs/adapter-cloudflare";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter({
        routes: {
          include: ["/*"],
          exclude: ["<all>"],
        },
      }),
      preprocess: vitePreprocess(),
    }),
    tailwindcss(),
    Icons({ compiler: "svelte" }),
  ],
});
