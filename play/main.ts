import { createApp } from "vue";
import App from "./app.vue";
import bobwu from "@bobwu/components";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(ElementPlus);
app.use(bobwu);
app.mount("#app");
