<template lang="html">
  <div class="loginBox">
      <p class="logo"><img src="../../../static/images/logo.png"></p>
        <form class="ms-login" :model="ruleForm">
          <div class="ms-inp">
            <p class="inp">
              <span><img src="../../../static/images/user.png" alt=""></span>
              <input type="text" name="" v-model="ruleForm.username" @blur="vlUsername" placeholder="username">
              <span class="error" v-if='userError'>请输入用户名</span>
            </p>
            <p class="line" :class=" {error:userError}"></p>
          </div>
          <div class="ms-inp">
            <p class="inp">
              <span><img src="../../../static/images/password.png" alt=""></span>
              <input type="password" name="" v-model="ruleForm.password" @blur="vlPassword" placeholder="password">
              <span class="error" v-if='passError'>请输入密码</span>
            </p>
            <p class="line" :class=" {error:passError}"></p>
          </div>
          <a href="#" class="login-btn" @click="submitForm('ruleForm')">登陆</a>
        </form>
        

  </div>
</template>

<script>
export default {
  data()  {
    return  {
      ruleForm: {
        username:'',
        password:''
      },
      userError:false,
      passError:false

    }
  },
  methods:{
    vlUsername(){
        if(this.ruleForm.username==''){
          this.userError = true;
        }else{
          this.userError = false;
        }
    },
    vlPassword(){
        if(this.ruleForm.password==''){
          this.passError = true;
        }else{
          this.passError = false;
        }
    },
    submitForm(formName){
      const self = this;
      self.vlUsername();
      self.vlPassword();
      if(!self.userError && !self.passError){
        self.$router.push('/home')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/page/login.scss'
</style>
