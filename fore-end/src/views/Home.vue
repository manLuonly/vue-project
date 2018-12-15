<template>
  <div class="home">
    <transition
    mode="out-in"
    enter-active-class="animated bounceInup"
    leave-active-class="animated bounceOutDown"
    >
    <!-- 留给轮播图的坑 -->
    <router-view></router-view>
    </transition>
    <!-- 留给底部组件的坑 -->
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from '../components/NavBar';
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}

</style>
