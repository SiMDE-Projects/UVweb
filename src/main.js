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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeart);
library.add(faCode);
library.add(faArrowLeft);
library.add(faSortUp);
library.add(faSortDown);
library.add(faGlasses);
library.add(faInfoCircle);
library.add(faXmark);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
