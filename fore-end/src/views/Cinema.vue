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
      <div class="right"><div>
        <img src="../images/serch.png" alt="">
        </div>
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
        <li class="cinema-list-item">
          <a href="" class="cinema-item-wrap">
            <div>
              <span></span>
              <span></span>
              </div>
            <div>
              <div>
                <span></span>
                <span></span>
              </div>
              <span></span>
              </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cinema'
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';

.main {
  flex: 1;
  .header{
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    height: px2rem(44);

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
        height: px2rem(45);
        background-color: #fff;
        padding: px2rem(15);
      }
    }
  }
}
</style>
