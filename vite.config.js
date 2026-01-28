import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Simple Vite config for a static portfolio (SPA).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
});


