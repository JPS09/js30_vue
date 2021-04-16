import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import BaseButton from "./components/ui/BaseButton.vue";
const app = createApp(App);

const BaseDialog = defineAsyncComponent(() =>
  import("./components/ui/BaseDialog.vue")
);

app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.use(store).use(router).mount("#app");
