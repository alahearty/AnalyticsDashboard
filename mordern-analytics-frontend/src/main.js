import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { Icon } from "@iconify/vue";
import VueApexCharts from "vue3-apexcharts";
import PerfectScrollbar from "vue3-perfect-scrollbar";

import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import "./assets/tailwind.css";
import "./assets/animate.css";
import "./assets/sass/css/style.css";

const app = createApp(App);
app.use(store)
app.use(router, Icon);
app.use(VueApexCharts);
app.use(PerfectScrollbar);
app.mount("#app");

router.beforeEach((to, from, next) => {
  document.querySelector(".flex-sidebar").classList.add("hidden");
  next();
});