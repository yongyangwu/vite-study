import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  build: {
    rollupOptions: {
      input: "./src/index.js",
      external: ["vue"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          // exports: "named",
          //配置打包根目录
          dir: "./bobwu/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          // exports: "named",
          //配置打包根目录
          dir: "./bobwu/lib",
        },
        // {
        //   //打包格式
        //   format: "iife",
        //   //打包后文件名
        //   entryFileNames: "[name].js",
        //   //让打包目录和我们目录对应
        //   preserveModules: true,
        //   // exports: "named",
        //   //配置打包根目录
        //   dir: "./bobwu/dist",
        //   name: "bowu",
        // },
      ],
    },
    lib: {
      entry: "./src/index.js",
      // formats: ["es"],
      name: "bobwu",
      // fileName: "www",
    },
  },
  plugins: [vue()],
});
//
