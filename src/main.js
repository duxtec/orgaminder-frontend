import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";

loadFonts();

createApp(App)
    .use(router)
    .use(Toast, {
        transition: "Vue-Toastification__bounce",
        maxToasts: 20,
        newestOnTop: true,
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnHover: true,
    })
    .use(vuetify)
    .mount("#app");
