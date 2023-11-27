import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BmwButton: typeof components.Button;
  }
}
export {};
