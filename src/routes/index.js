import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import Main from '@/views/main.vue';
Vue.use(VueRouter);

const routes = [
  {
    name: 'main',
    component: Main,
    path: '/main',
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('@/views/home/home.vue')
      }
    ],
    meta: {
      title: '首页'
    }
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录'
    }
  }
];

const router = new VueRouter({
  routes
});

//  页面进入之前
router.beforeEach((...args) => {
  let next = args[2] || function() {};
  NProgress.start();
  next();
});
//  页面进入之后
router.afterEach(() => {
  NProgress.done();
});
//  导航发生错误
router.onError(NProgress.done);


export default router;