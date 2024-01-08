import { createApp } from "vue";
import App from "./app.vue";
import easyest from "@easyest/components";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(ElementPlus)
app.use(easyest);
app.mount("#app");
