<template>
  <div class="absolute-view bg-theme">
    <div class="login-box text-center">
      <div class="f-30 c-f">博客管理后台</div>
      <div class="login-content bg-f">
        <input class="lg-iu" type="text" v-model="userCode" placeholder="请输入用户名">
        <input class="lg-iu" type="password" v-model="password" placeholder="请输入密码">
        <div class="login-btn c-f active-btn" @click="loginHandler">login</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      userCode: '',
      password: ''
    };
  },
  methods: {
    //  登录Action
    ...mapActions({
      loginAction: 'loginAction'
    }),
    //  点击登录
    loginHandler() {
      let params = {
        userCode: this.userCode,
        password: this.password
      };
      this.loginAction(params)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>



<style lang="stylus" scoped>
.login-box
  margin-top 100px
.login-content
  width 400px
  border-radius 8px
  padding 40px
  margin 30px auto 0
.lg-iu
  border 1px solid #bfcbd9
  padding 10px 8px
  border-radius 6px
  width 100%
.lg-iu + .lg-iu
  margin-top 20px
.login-btn
  background-color #20a0ff
  padding 10px 0
  margin-top 20px
  border-radius 6px
</style>

