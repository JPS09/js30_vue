import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.use(store).use(router).mount("#app");
