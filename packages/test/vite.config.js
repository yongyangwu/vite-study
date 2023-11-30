import { defineConfig } from "vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: ["index.js"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
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
          exports: "named",
          //配置打包根目录
          dir: "./bobwu/lib",
        },
      ],
    },
    lib: {
      entry: "./index.js",
      name: "bobwu",
    },
  },
});
