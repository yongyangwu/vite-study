import { createApp } from "vue";
import App from "./app.vue";
// import bmwDesignUi from "@ultimate-vue-components/components";
const app = createApp(App);
// import "./index.scss";
// import "./index.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import "./index.scss";

app.use(ElementPlus);
// app.use(bmwDesignUi);
app.mount("#app");
