import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import PageLoader from "./components/ui/PageLoader.vue";

const app = createApp(App);

app.use(router);
app.component("base-spinner", BaseSpinner);
app.component("page-loader", PageLoader);
app.mount("#app");
