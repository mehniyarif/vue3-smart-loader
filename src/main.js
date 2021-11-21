import { createApp } from "vue";
import SmartLoader from "@/components/smart-loader"
import App from "./App.vue";

createApp(App)
.use(SmartLoader)
.mount("#app");
