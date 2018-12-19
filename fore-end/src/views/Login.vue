<template>
  <div>
    <header id="header">
      <div class="logo"></div>
      <div class="sj">
        <input type="text" placeholder="手机号" v-model="phoneInput">
        <span>获取验证码</span>
      </div>
      <div class="yzm">
        <input type="text" placeholder="验证码" v-model="codeInput">
      </div>
      <button @click="handleLogin" :disabled="isDisabled">登录</button>
    </header>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data () {
    return {
      phoneInput: '',
      codeInput: ''
    }
  },
  // 计算属性,button中绑定了一个方法来获取布尔值
  computed: {
    isDisabled () {
      // 手机号和验证码都为真返回false,false才能点击登录.
      if (this.phoneInput && this.codeInput) {
        return false;
      } else {
        // 为true不能点击登录,点击事件不能触发
        return true;
      }
    }
  },
  methods: {
    handleLogin () {
      // 发送请求,账号密码传递
      axios.post('/api/user/login', {
        username: this.phoneInput,
        password: this.codeInput
      }).then(res => {
        console.log(res)
        var data = res.data;
        if (data.code === 0) {
          alert('登录成功')
          // 写入本地存储
          localStorage.setItem('userName', this.username);
          // 取出query的redirect的值
          let redirect = this.$route.query.redirect;
          // 登录成功从定向
          this.$router.replace(redirect);
        } else if(data.code === 2) {
          alert('用户已存在')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/common/px2rem.scss';

#header {
  height: px2rem(500);
  display: flex;
  flex-direction: column;

  .logo {
    // flex: 1;
    width: px2rem(100);
    height: px2rem(100);
    background: url(../images/logo.jpg) no-repeat;
    background-size: 100%;
    margin: px2rem(100) auto;
  }

  .sj,
  .yzm {
    display: flex;
    height: px2rem(55);
    margin: px2rem(10) px2rem(25);
    border-bottom: px2rem(1) solid #ccc;

    input {
      width: 70%;
      font-size: px2rem(18);
      border: 0;
    }

    span {
      width: 30%;
      font-size: px2rem(18);
      color: #ccc;
      display: flex;
      align-self: center;
    }
  }

  button {
    display: flex;
    justify-content: center;
    height: px2rem(80);
    margin: px2rem(20) px2rem(25);
    background: #ff5f16;
    font-size: px2rem(20);
    text-align: center;
    color: white;

    &[disabled] {
      background: #ccc;
    }
  }
}
</style>
