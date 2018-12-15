<template>
  <div class="film-detail">
    <div class="film-poster">
      <img src="https://pic.maizuo.com/usr/movie/f713d0f85512087679ac951e8565d187.jpg?x-oss-process=image/quality,Q_70" alt="">
    </div>

    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ filmName }}</span>
          <span class="item">3D</span>
        </div>
        <div class="film-grade">
          <span class="grade">7.2</span>
          <span class="grade-text">分</span>
        </div>
      </div>

      <div class="film-category grey-text">动作 | 奇幻 | 冒险</div>
      <div class="film-premiere-time grey-text">
        2018-12-07上映
      </div>
      <div class="film-nation-runtime grey-text">
        美国   澳大利亚  | 143分钟
      </div>
      <div class="film-synopsis grey-text">
        本片由杰森·莫玛领衔主演，讲述半人半亚特兰蒂斯血统的亚瑟·库瑞踏上永生难忘的征途——他不但需要直面自己的特殊身世，更不得不面对生而为王的考验：自己究竟能否配得上“海王”之名。
      </div>
      <div class="toggle">
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>

    <router-link to="/film/9898">猫王</router-link>
  </div>
</template>

<script>
export default {
  name: 'FilmDetail',

  data () {
    return {
      filmName: ''
    }
  },

  methods: {
    getFilmDetail () {
      setTimeout(() => {
        if (this.$route.params.filmId === 4469) {
          this.filmName = '海王';
        } else {
          this.filmName = '猫王';
        }
      }, 2000)
    }
  },

  created () {
    this.getFilmDetail();
  },

  beforeRouteEnter (to, from, next) {
    // 进入详情页面就会被调用
    next();
  },

  beforeRouteUpdate (to, from, next) {
    // 发生变化,就请求后台数据
    this.getFilmDetail();
  },

  beforeRouteLeave (to, from, next) {
    next();
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';

.film-detail {
  flex: 1;
  overflow-y: auto;

  .film-poster {
    height: px2rem(210);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .film-detail {
    padding: px2rem(15);
    padding-top: px2rem(12);
    background-color: #fff;

    .col {
      display: flex;
      align-items: center;
    }

    .film-name {
      flex: 1;
      display: flex;
      align-items: center;

      .name {
        color: #191a1b;
        font-size: px2rem(18);
        height: px2rem(24);
        line-height: px2rem(24);
        margin-right: px2rem(8);
      }

      .item {
        font-size: px2rem(12);
        color: #fff;
        background-color: #d2d6dc;
        height: px2rem(14);
        line-height: px2rem(14);
        padding: 0 px2rem(2);
        border-radius: px2rem(2);
        display: inline-block;
      }
    }

    .film-grade {
      flex-shrink: 0;
      width: px2rem(100);
      text-align: right;
      color: #ffb232;
      font-size: px2rem(12);

      .grade {
        font-size: px2rem(18);
        font-style: italic;
      }
    }

    .grey-text {
      font-size: px2rem(13);
      line-height: px2rem(20);
      color: #797d82;
      margin-top: px2rem(4);
    }

    .film-synopsis {
      margin-top: px2rem(8);
      overflow: hidden;
      &.hide {
        height: px2rem(40);
      }
    }

    .toggle {
      text-align: center;
      &.hide {
        i {
          transform: translate(180deg);
        }
      }
    }
  }
}

</style>
