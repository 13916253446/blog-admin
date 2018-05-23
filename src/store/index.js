import Vue from 'vue';
import Vuex from 'vuex';
import { post } from '@/tools/service/request.js';
Vue.use(Vuex);
const state = {
  //  管理员
  admin: {
    //  编码
    _id: '',
    //  用户名
    userCode: ''
  }
};

const mutations = {
  //  设置管理员
  setAdmin(state, admin = {}) {
    state.admin._id = admin._id || '';
    state.admin.userCode = admin.userCode || '';
  }
};

const actions = {
  //  登录
  loginAction(context, params = {}) {
    return post('login', params)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        context.commit('setAdmin');
        throw new Error(err);
      });
  }
};

export const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store;