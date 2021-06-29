import { createApp } from "vue";
import {picker,field,popup} from 'vant'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/utils/rem"

createApp(App).use(store).use(router).use(picker).use(field).use(popup).mount("#app");
