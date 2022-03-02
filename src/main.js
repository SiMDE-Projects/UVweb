import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faHeart,
  faArrowLeft,
  faSortUp,
  faSortDown,
  faGlasses,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeart);
library.add(faCode);
library.add(faArrowLeft);
library.add(faSortUp);
library.add(faSortDown);
library.add(faGlasses);
library.add(faInfoCircle);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
