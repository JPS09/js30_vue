import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import BaseButton from "./components/ui/basecomponents/BaseButton.vue";
import BaseCard from "./components/ui/basecomponents/BaseCard.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMicrophone,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
const BaseDialog = defineAsyncComponent(() =>
  import("./components/ui/basecomponents/BaseDialog.vue")
);

library.add(faSearch);
library.add(faMicrophone);
library.add(faTimes);

app.component("font-awesome-icon", FontAwesomeIcon);

app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("base-card", BaseCard);
app.use(store).use(router).mount("#app");
