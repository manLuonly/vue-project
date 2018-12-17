<template>
  <div id="app">
    <transition
    mode="out-in"
    appear
    enter-active-class="animate bounceInUp"
    leave-active-class="animate bounceOutDown"
    >
    <!-- 底部组件的坑 -->
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import NavBar from './components/NavBar/index';
export default {
  name: 'App',

  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import './styles/base.scss';
</style>
