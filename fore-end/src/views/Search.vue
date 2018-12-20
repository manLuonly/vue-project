<template>
<div class="search">
  <div class="cinemas-search-input">
  <input type="text" placeholder="输入影城名称" class="search-input" v-model="input">
  <router-link :to='{name:"cinemas"}' tag="div" class="cancel-btn">取消</router-link>

      <div class="cinema-list-wrap">
      <ul class="cinema-list">
        <li class="cinema-list-item" v-for="(item, index) in films" :key="index" >
          <a href="" class="cinema-item-wrap">
            <div class="cinema-info-lf cinema-info">
                <span class="cinema-name">{{ item.name }}</span>
                <span class="cinema-address">{{ item.address }}</span>
              </div>
            <div class="cinema-info-rt cinema-info">
              <div class="Rmb">
                <span class="cinema-lowPrice price-fmt">¥</span>
                <span class="interge">{{ getTime(item.lowPrice )}}</span>
                <span class="upon">起</span>
              </div>
              <span class="cinema-gpsAddress">距离未知</span>
              </div>
          </a>
        </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Search',
  data () {
    return {
      input: '',
      films: []
    }
  },
  methods: {
    getCity (newVal) {
      axios.get('/api/citylist', {
        params: {
          val: newVal
        }
      }).then((response) => {
        if (response.data.code === 0) {
          this.films.push(...response.data.data[1])
        } else {
          console.log('1')
        }
      })
    },
    getTime (lowPrice) {
      var time = lowPrice / 100;
      return time;
    }
  },
  // 监听input的实时变化
  watch: {
    input (newVal, oldVal) { // newVal为新值,oldVal为久值
      console.log(newVal)
      if (newVal) {
        // console.log('发生变化了')
        console.log(newVal)
        this.getCity(newVal);
      } else {
        console('0')
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';
.search{
  .cinemas-search-input{
    z-index: 99;
    height: px2rem(49);
    width: 100vw;
    padding: px2rem(9.5) px2rem(15);
    background-color: #fff;
    position: fixed;
    .search-input{
      width: px2rem(302);
      height: px2rem(25);
      background: #f4f4f4;
      border-radius: px2rem(3);
    }
    .cancel-btn{
      width: px2rem(43);
      position: absolute;
      display: inline-block;
      text-align: right;
      font-size: px2rem(14);
      line-height: px2rem(30);
    }
  }
  .cinema-list-wrap{
    ul{
      list-style: none;
      li{
        height: px2rem(65);
        background-color: #fff;
        padding-left: px2rem(15);
        .cinema-item-wrap{
          height: px2rem(75);
          border-bottom: 1px solid #ededed;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          text-decoration: none;
          .cinema-info-lf{
            span{
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            width: px2rem(288);
            height: px2rem(45);
            text-align: left;
            padding-right: px2rem(15);
            float: left;
            .cinema-name{
              color: #191a1b;
              font-size: px2rem(15);
              margin-top: px2rem(5);
            }
            .cinema-address{
              color: #797d82;
              font-size: px2rem(12);
              margin-top: px2rem(10);
            }
          }
          .cinema-info-rt{
            width: px2rem(65);
            text-align: right;
            float: right;
            margin-left: px2rem(-8);
            .Rmb{
              color: #ff5f16;
              position: relative;
              top: -7px;
              .cinema-lowPrice{
                font-size: px2rem(11);
                font-style: normal;
                margin-right: px2rem(-5);
              }
              .interge{
                font-size: px2rem(15);
                margin-right: px2rem(-7);
              }
              .upon{
                font-size: px2rem(10);
                color: #ff5f16;
              }
            }
            .cinema-gpsAddress{
              display: block;
              color: #797d82;
              font-size: px2rem(11);
              margin-top: px2rem(5);
            }
          }
        }
      }
    }
  }
}
</style>
