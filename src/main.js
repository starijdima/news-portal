import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
