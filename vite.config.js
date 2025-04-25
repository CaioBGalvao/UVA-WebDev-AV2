// vite.config.js
import 'dotenv/config'
import { defineConfig } from "vite";
import process from "node:process";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: "./",
  server: {
    port: parseInt(process.env.VITE_PORT || process.env.PORT || "5173", 10),
    strictPort: true,
  },
});
