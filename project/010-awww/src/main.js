import './css/global.css';

import Vue from 'vue';
import Router from 'vue-router';
import Validator from 'vee-validate';

import App from './App.vue';
import Home from './page/Home';
import Detail from './page/Detail';
import Search from './page/Search';

import Admin from './page/admin/Admin';
import Category from './page/admin/Category';

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(Validator, {
  locale: 'zh_CN'
});

const router = new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/detail', component: Detail },
    { path: '/search', component: Search },

    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '/category',
          component: Category,
        }
      ]
    }
  ],
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
