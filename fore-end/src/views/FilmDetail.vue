<template>
  <div class="film">
    <div v-for="(item, index) in films" :key="index" @click="goDetail(item.filmId)">
    <div class="film-poster">
      <img src="https://pic.maizuo.com/usr/movie/f713d0f85512087679ac951e8565d187.jpg?x-oss-process=image/quality,Q_70" alt="">
    </div>

    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ item.name }}</span>
          <span class="item">{{ item.filmType.name }}</span>
          <!-- 必须先保证有filmsType才能使用.name -->
          <!-- films.filmType && film.filmType.name -->
        </div>
        <div class="film-grade">
          <span class="grade">{{ item.grade }}</span>
          <span class="grade-text">分</span>
        </div>
      </div>

      <div class="film-category grey-text">{{ item.category }}</div>
      <div class="film-premiere-time grey-text">
        {{ item.premiereAt }}上映
      </div>
      <div class="film-nation-runtime grey-text">
        {{ item.nation }} |  {{ item.runtime }}分钟
      </div>
      <div class="film-synopsis grey-text">
        {{ item.synopsis }}
      </div>
      <div class="toggle">
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>

    <div class="actors">
        <div class="actors-title-bar">
          <span class="actors-title-text">演职人员</span>
        </div>
        <div class="row-scroll-wrapperactors-list">
          <ul class="row-scroll-items-nav">
            <li >
              <div class="lazy-img-wrap">
                <img :src="item.poster" alt="">
                <span class="actors-name"> {{ actorsList(item.actors) }}</span>
                <span class="actors-role"> {{ actorsList2(item.actors) }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="photos">
        <div class="photos-title-bar">
          <span class="photos-title-text">剧照</span>
          <span class="photos-to-all">全部(6)</span>
        </div>
        <div class="row-scroll-wrapper photos-list">
          <ul class="row-scroll-items-nav">
            <li class="row-scroll-item photos-item-wrap">
              <img src="../images/juzhao.jpg" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
      <div class="goSchedule">选座购票</div>
    <!-- 从某个详情页跳到另一个详情页的功能,暂不需要 -->
    <!-- <router-link to="/film/9898">猫王</router-link> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FilmDetail',

  data () {
    return {
      films: [],
      pageNum: 1, // 当前页码
      pageSize: 1, // 每页条数
      totalPage: 0 // 总页数
    }
  },

  methods: {
    getFilmDetail (film) {
      // 添加请求成功的ul插件
      this.$load.open();
      axios.get('/api/film/detail', {
        params: {
          // get 请求的参数传递
          id: film
        }
      }).then((response) => {
        this.$toast('请求成功');
        let result = response.data;
        console.log(result)
        if (result.code === 0) {
          console.log('进来了')
          this.films.push(...result.data);
        } else {
          alert(result.msg)
        }
        // ul插件请求成功或失败都要关闭
        this.$load.close();
      })
    },

    // 排列主演剧中名字
    actorsList (list) {
      let arr = [];
      if (list) {
        arr = list.map(item => {
          return item.name;
        });
      }
      return arr.join(' ');
    },
    // 排列主演名字
    actorsList2 (list) {
      let arr = [];
      if (list) {
        arr = list.map(item => {
          return item.role;
        });
      }
      return arr.join(' ');
    },
    // 详情页面
    goDetail (id) {
      this.$router.push({
        name: 'filmDetail',
        params: {
          filmId: id
        }
      })
    }
  },
  created () {
    let film = this.$route.params.filmId;
    this.getFilmDetail(film);
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';

.film {
  flex: 1;
  overflow-y: auto;
  background:rgb(244, 244, 244);

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
      height: px2rem(38);
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
  .actors {
    margin-top: px2rem(10);
    background-color: #fff;
    height: px2rem(190);
    .actors-title-bar {
      width: 100%;
      padding: px2rem(15);
      .actors-title-text {
        font-size: px2rem(16);
        text-align: left;
        color: #191a1b;
      }
    }
    .row-scroll-wrapperactors-list{
      padding-left: px2rem(15);
      background: #fff;
      overflow-x: auto;
      overflow-y: hidden;
      .row-scroll-items-nav{
        height: px2rem(165);
              li{
        width:px2rem(85);
        height: px2rem(143);
        margin-right:px2rem(10);
        .lazy-img-wrap{
        width: px2rem(85);
        height: px2rem(85);
        img{
          width: 100%;
        }
        .actors-name{
          padding-top: px2rem(10);
          font-size: px2rem(12);
          width: px2rem(85);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #191a1b;
        }
        .actors-role{
          margin: px2rem(5);
          font-size: px2rem(10);
          color: #797d82;
          display: block;
          white-space: nowrap;
          text-align: center;
            }
          }
        }
      }
    }
  }
  .photos{
    height: px2rem(180);
    margin-top: px2rem(55);
    margin-bottom: px2rem(60);
    background-color: #fff;
    position: relative;
    top: px2rem(-15);
    .photos-title-bar{
      height: px2rem(62);
      padding:px2rem(15);
      .photos-title-text{
        font-size: px2rem(16);
        text-align: left;
        color: #191a1b;
      }
      .photos-to-all{
        font-size: px2rem(13);
        color: #797d82;
        float: right;
      }
    }
    .row-scroll-wrapper{
      width:px2rem(150);
      .row-scroll-item{
        width: px2rem(150);
        height: px2rem(100);
        margin-left:px2rem(15);
        margin-right:px2rem(10);
        img{
          width: 100%;
        }
      }
    }
  }
  .goSchedule{
    position: fixed;
    bottom: 0;
    left: 0;
    height: px2rem(49);
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: px2rem(16);
    line-height: px2rem(49);
  }
}

</style>
