import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  base: "/",
  // path의 절대 경로 사용을 위함입니다
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@atoms": path.resolve(__dirname, "src/atoms"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
});
