<template>
  <div class="main">
    <header class="header">
      <div class="left">
        <div class="city">
          <span>深圳 <img src="../images/xia.png" class="xia" alt=""></span>
        </div>
        </div>
      <div class="title">
        <div>影院</div>
        </div>
      <div class="right">
        <router-link to="/cinemas/search" tag="div">
        <img src="../images/serch.png" alt="">
        </router-link>
      </div>
    </header>

    <div class="cinema-list-tag">
      <div class="cinema-list-tag-name">
        <label for="">全城 <img src="../images/xia.png" alt=""></label>
        <label for="">最近去过 <img src="../images/xia.png" alt=""></label>
        </div>
    </div>

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
</template>

<script>
import axios from 'axios';
export default {
  name: 'Cinema',
  data () {
    return {
      films: []
    }
  },
  methods: {
    getdata () {
      axios.get('api/list').then(res => {
        // console.log(res.data.data)
        // 数组解构赋值
        this.films.push(...res.data.data)
      })
    },
    // 转真正的价格
    getTime (lowPrice) {
      var time = lowPrice / 100;
      return time;
    }
  },
  // 执行getdata方法(请求接口)
  created () {
    this.getdata();
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';
@import '@/styles/base.scss';

.main {
  flex: 1;
  .header{
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    height: px2rem(44);
    background: #fff;

    .left{
      width: px2rem(56.25);
      margin-left: px2rem(15);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      line-height: px2rem(44);
      .city{
        display: flex;
        align-items: center;
        span{
          display: inline-block;
          font-size: px2rem(13);
          height: px2rem(16);
          color: #191a1b;
          img{
            width: px2rem(6);
            height: px2rem(3);
            vertical-align: middle;
          }
        }
      }
    }
    .title{
      width: px2rem(232.5);
      text-align: center;
      font-size: px2rem(17);
      color: #191a1b;
      margin-left: px2rem(71);
      margin-top: px2rem(-2);
    }
    .right{
      width: px2rem(56.25);
      display: flex;
      align-items: center;
      margin-right: px2rem(15);
      margin-left: px2rem(341);
      margin-top: px2rem(-19);
      img{
        width: px2rem(18);
        height: px2rem(18);
      }
    }
  }
  .cinema-list-tag{
    position:fixed;
    top:px2rem(44);
    width: 100%;
    height: px2rem(50);
    text-align: center;
    z-index: 99;
    border-bottom: px2rem(1) solid #ededed;
    background: #fff;
    label{
      float: left;
      width: 50%;
      line-height: px2rem(49);
      font-size: px2rem(14);
      color: #191a1b;
      img{
        width: px2rem(6);
        height: px2rem(3);
        vertical-align: middle;
      }
    }
  }
  .cinema-list-wrap{
    padding-top: px2rem(94);
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
