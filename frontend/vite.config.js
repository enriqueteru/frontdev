import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@context": "/src/context",
      "@features": "/src/features",
      "@hooks": "/src/hooks",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
      "@router": "/src/router",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
  },
});
