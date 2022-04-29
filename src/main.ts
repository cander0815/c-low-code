import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "element-plus/dist/index.css";
import element from "element-plus";

const app = createApp(App);
app.use(element);
app.use(router).mount("#app");
