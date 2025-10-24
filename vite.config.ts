import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://amddakbedekking.nl/sitemap.xml",
    }),
  ],

  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
