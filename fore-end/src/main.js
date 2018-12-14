
import Vue from 'vue';
import App from './App';
import router from './router';
// import store from './store';

// 去除Vue开发时浏览器提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  // store,
  components: { App },
  template: '<App/>'
});
