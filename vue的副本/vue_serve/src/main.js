import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";
import http from "../http";
import { Toast } from "vant";
Vue.prototype.$http = http;
Vue.use(Vant);
Vue.prototype.$msg = Toast;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
