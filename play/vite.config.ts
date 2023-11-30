import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import DefineOptions from "unplugin-vue-define-options/vite";
// import vueSetupExtend from "unplugin-vue-setup-extend-plus/vite";

export default defineConfig({
  resolve: {
    extensions: [".js", ".ts", ".vue"],
  },

  plugins: [vue()],
});
