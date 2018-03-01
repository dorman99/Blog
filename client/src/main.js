import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import swal from 'sweetalert'
Vue.prototype.$swal = swal
Vue.prototype.$http = axios.create({
  baseURL: 'http://35.197.129.37:3001'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
