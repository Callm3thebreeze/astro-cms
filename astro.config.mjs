import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import "dotenv/config";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  server: {
    port: 4000,
  },
  site: "https://www.linkedin.com/in/jesusvillarjimenez/",
  integrations: [tailwind(), icon(), mdx(), sitemap(), react()],
});
