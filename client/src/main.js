import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import swal from 'sweetalert'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import VueRouter from 'vue-router'
import Routes from'./routes'
import axios from 'axios'

      Vue.prototype.$http = axios;
      const token = localStorage.getItem('token');
      if (token) {
        Vue.prototype.$http.defaults.headers.common['Authorization'] = token
      }
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue)

export const bus = new Vue();
const router=new VueRouter({
  routes:Routes

});


Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')

