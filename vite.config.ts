import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import aliasConfig from "./alias.config";
import style from "./style.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliasConfig,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: style,
        javascriptEnabled: true,
      },
    },
  },
});
