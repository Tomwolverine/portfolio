import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import store from './store'
// import home from './views/Home.vue'

Vue.component('icon', Icon);

Vue.config.productionTip = false

Vue.use(BootstrapVue);

// const router = new Vue({
//   mode: 'history',
//   routes: [{
//     path: '/',
//     component: home
//   }]
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')