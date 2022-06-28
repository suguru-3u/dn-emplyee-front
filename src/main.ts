import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(store, key).use(router).use(VueAxios, axios).mount("#app");
