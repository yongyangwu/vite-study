import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  resolve: {
    extensions: [".js", ".ts", ".vue"],
  },

  plugins: [vue(), DefineOptions()],
});
