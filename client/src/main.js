import Vue from "vue";
import App from "./App.vue";

import BootstrapVue from "bootstrap-vue";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import ourApi from "./services/apiConnect";

import router from "./routes.js";
import axios from "axios";

Vue.use(BootstrapVue);

Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
Vue.config.productionTip = false;

// export const bus = new Vue();

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
