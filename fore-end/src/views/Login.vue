<!-- <template>
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
      codeInput: '',
    }
  },
  computed: {
    isDisabled () {
      if (this.phoneInput && this.codeInput) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    handleLogin () {
      axios.get('/static/api/users.json', {
        params: {
          phone: this.phoneInput,
          code: this.codeInput
        }
      }).then(res => {
        var result = res.data;
        if (result.phone === this.phoneInput && result.code === this.codeInput) {
          console.log('登陆成功');
          // 写入本地存储
          localStorage.setItem('userName','阿刁');
          // 取出query的redirect
          let redirect = this.$route.query.redirect;
          this.$router.replace(redirect);
        } else {
          alert('账号或密码错误');
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
</style> -->
