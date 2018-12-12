<template>
  <ul class="nav-bar">
    <router-link
    v-for="(item, index) in bars"
    :key="index"
    :class="item.id"
    :to="{ path: item.path }"
    :tag="li"
    active-class="z-act"
    >
    <i class="img"></i>
    <span v-text="item.name"></span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'NavBar',

  data () {
    return {
      bars: [
        {
          id: 'films',
          path: '/films/nowPlaying',
          name: '电影'
        },
        {
          id: 'cinemas',
          path: 'cinemas',
          name: '影院'
        },
        {
          id: 'center',
          path: 'center',
          name: '我的'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/styles/common/px2rem.scss';

.nav-bar {
  flex-shrink: 0;
  display: flex;
  height: px2rem(50);
  border-top: px2rem(1) solid #ededed;
  img {
    width: px2rem(21);
    height: px2rem(21);
  }
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: px2rem(12);

    .img {
      display: block;
      width: px2rem(22);
      height: px2rem(22);
      background-size: 100%;
    }

    &.films {
      .img {
        background-image: url('./images/films.png');
      }
      &.z-act .img {
        background-image: url('./images/films_on.png');
      }
    }
    &.cinemas {
      .img {
        background-image: url('./images/cinemas.png');
      }
      &.z-act .img {
        background-image: url('./images/cinemas_on.png');
      }
    }
    &.center {
      .img {
        background-image: url('./images/center.png');
      }
      &.z-act .img {
        background-image: url('./images/center_on.png');
      }
    }

    &.z-act {
      color: #ff5f16;
    }
  }
}
</style>
