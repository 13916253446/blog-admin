import Vue from 'vue';
import App from '@/views/app.vue';
import router from '@/routes/index.js';
//  解决实例化的对象方法polyfill(例: [1,2,3].includes)
import 'babel-polyfill';
import '@/styles/common.styl';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//  设置全局element
window.ElementUI = ElementUI;
Vue.use(ElementUI);

new Vue({
  id: 'app',
  components: {
    App
  },
  template: `<App />`,
  router
}).$mount('#app');
