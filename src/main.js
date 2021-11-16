import { createApp } from "vue";
import Spinners from "@/components/smart-loader"
import App from "./App.vue";

createApp(App).use(Spinners).mount("#app");
