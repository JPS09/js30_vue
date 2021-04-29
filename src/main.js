import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
const BaseDialog = defineAsyncComponent(() =>
  import("./components/ui/BaseDialog.vue")
);

library.add(faSearch);
app.component("font-awesome-icon", FontAwesomeIcon);

app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("base-card", BaseCard);
app.use(store).use(router).mount("#app");
