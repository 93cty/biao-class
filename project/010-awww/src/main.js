import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/detail', component: Detail },
    { path: '/searc', component: Search },
  ],
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
