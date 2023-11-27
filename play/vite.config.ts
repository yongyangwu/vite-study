import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "unplugin-vue-setup-extend-plus/vite";
// import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  plugins: [
    vue(),
    // DefineOptions(),
    vueSetupExtend({
      /* options */
    }),
  ],
});
