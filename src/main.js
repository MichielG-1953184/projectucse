import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material';
import router from './router'
import LayoutPlugin from 'bootstrap-vue'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(router)
Vue.use(LayoutPlugin)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
