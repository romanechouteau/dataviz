import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnime from 'vue-animejs'

Vue.config.productionTip = false
Vue.use(VueAnime)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
