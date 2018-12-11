
import Vue from 'vue';
import App from './App';
import router from './router';

// 去除Vue开发时浏览器提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  components: { App },
  template: '<App/>'
});
