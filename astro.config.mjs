import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import "dotenv/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.linkedin.com/in/jesusvillarjimenez/",
  integrations: [tailwind(), icon(), mdx(), sitemap()],
});
