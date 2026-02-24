import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: [
        "index.html",
        "task-2.html",
        "task-3.html",
        "task-4.html",
      ],
    },
  },
});
