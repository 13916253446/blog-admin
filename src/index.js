import Vue from 'vue';
import App from '@/views/app.vue';
//  解决实例化的对象方法polyfill(例: [1,2,3].includes)
import 'babel-polyfill';
import '@/styles/common.styl';

new Vue({
  id: 'app',
  components: {
    App
  },
  template: `<App />`
}).$mount('#app');
