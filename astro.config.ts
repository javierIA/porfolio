import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    site: "http://localhost:3000",
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true
    }
  },
  integrations: [sitemap(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), compress({
    css: false,
    html: {
      removeComments: true,
      removeAttributeQuotes: false
    },
    img: false,
    js: false,
    svg: false
  }), prefetch()],
  vite: {
    build: {
      assetsInlineLimit: 0
    }

  },
  output: "server",
  adapter: vercel()
});
