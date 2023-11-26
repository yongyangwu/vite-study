import { createApp } from "vue";
import App from "./app.vue";
import bmwDesignUi from "@bmw-design-ui/components";
const app = createApp(App);
app.use(bmwDesignUi);
app.mount("#app");
