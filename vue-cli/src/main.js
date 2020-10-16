import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import {routes} from './routes.js'

Vue.use(vueRouter);

const router = new vueRouter({
  routes,
  mode : 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
