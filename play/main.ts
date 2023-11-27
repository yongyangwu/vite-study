import { createApp } from "vue";
import App from "./app.vue";
import easyest from "@easyest/components";
const app = createApp(App);
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);
app.use(easyest);
app.mount("#app");
