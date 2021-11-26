import { createApp } from "vue";
import SmartLoader from "@/components/smart-loader"
import App from "./App.vue";
Object.assign(SmartLoader, {
    config:{
        ui:"bootstrap5",
        smartMenu: {
            visibility:true,
            stopAfter:3,
            texts:{
                title:{
                    text:"Galatasaray",
                    class:"h2 text-primary text-center"
                },
                description:{
                    text:"bu bir takımdır",
                    class:"text-center h6"
                },
                second:{
                    text:"Saniye",
                    class:"text-center"
                }
            },
            /* buttons:[
                
                {
                    label: "Just Turn Off Spinner",
                    class: "btn btn-dark m-2",
                    type: "turn-off",
                },
                {
                    label: "Page Reload",
                    class: "btn btn-secondary",
                    type: "page-reload",
                },
                
                {
                    label: "Hang on!",
                    class: "btn btn-info",
                    type: "hang-on",
                    action: ""
                }
            ] */
        }
    }
})
createApp(App)
.use(SmartLoader)
.mount("#app");
