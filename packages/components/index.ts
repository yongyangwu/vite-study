import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c as keyof typeof components]);
    }
  },
};

// const components: { [key: string]: any } = {
//   // 组件列表
// };

// for (let c in components) {
//   app.use(components[c as keyof typeof components]);
// }

