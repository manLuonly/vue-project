<template>
<div class="group">
<ul>
  <li>
    <img src="../images/9.9.jpg" alt="">
    <div class="item-text">
      <span class="table-cell">三峡清江椪柑 3斤装</span>
      <span class="slave-title">优选果园新鲜采摘 果肉金黄剔透 鲜嫩多汁 清甜爽口 入口化渣</span>
      <div class="item-bottom">
        <span class="currency">¥13.5</span>
        <span class="market-price">原价¥16.9</span>
        <div class="button normal-button-hover">
            去拼单
        </div>
      </div>
    </div>
  </li>
  <li>
    <img src="../images/9.9.jpg" alt="">
    <div class="item-text">
      <span class="table-cell">三峡清江椪柑 3斤装</span>
      <span class="slave-title">优选果园新鲜采摘 果肉金黄剔透 鲜嫩多汁 清甜爽口 入口化渣</span>
      <div class="item-bottom">
        <span class="currency">¥13.5</span>
        <span class="market-price">原价¥16.9</span>
        <div class="button normal-button-hover">
            去拼单
        </div>
      </div>
    </div>
  </li>
  <li>
    <img src="../images/9.9.jpg" alt="">
    <div class="item-text">
      <span class="table-cell">三峡清江椪柑 3斤装</span>
      <span class="slave-title">优选果园新鲜采摘 果肉金黄剔透 鲜嫩多汁 清甜爽口 入口化渣</span>
      <div class="item-bottom">
        <span class="currency">¥13.5</span>
        <span class="market-price">原价¥16.9</span>
        <div class="button normal-button-hover">
            去拼单
        </div>
      </div>
    </div>
  </li>
  <li>
    <img src="../images/9.9.jpg" alt="">
    <div class="item-text">
      <span class="table-cell">三峡清江椪柑 3斤装</span>
      <span class="slave-title">优选果园新鲜采摘 果肉金黄剔透 鲜嫩多汁 清甜爽口 入口化渣</span>
      <div class="item-bottom">
        <span class="currency">¥13.5</span>
        <span class="market-price">原价¥16.9</span>
        <div class="button normal-button-hover">
            去拼单
        </div>
      </div>
    </div>
  </li>
  <li>
    <img src="../images/9.9.jpg" alt="">
    <div class="item-text">
      <span class="table-cell">三峡清江椪柑 3斤装</span>
      <span class="slave-title">优选果园新鲜采摘 果肉金黄剔透 鲜嫩多汁 清甜爽口 入口化渣</span>
      <div class="item-bottom">
        <span class="currency">¥13.5</span>
        <span class="market-price">原价¥16.9</span>
        <div class="button normal-button-hover">
            去拼单
        </div>
      </div>
    </div>
  </li>
</ul>

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';

.group{
  display: flex;
  flex: 1;
  li{
    .item-text{
      margin-left: px2rem(22);
      .table-cell{
        font-size: px2rem(15);
        height: px2rem(21);
        line-height: px2rem(21);
        color: #191a1b;
      }
      .slave-title{
        font-size: px2rem(13);
        height: px2rem(19);
        line-height: px2rem(19);
        color: #797d82;
        display: block;
        margin-top: px2rem(3);
      }
      .item-bottom{
        margin-top: px2rem(20);
        .currency{
          color: #c03131;
          font-size: px2rem(16);
        }
        .market-price{
          color: #bdc0c5;
          font-size: px2rem(11);
          display: inline-block;
          text-decoration: line-through;
        }
        .button{
          background-color: rgb(192, 49, 49);
          color: white;
          width: px2rem(90);
          height: px2rem(33);
          font-size: px2rem(14);
          line-height: px2rem(33);
          text-align: center;
          border-radius: px2rem(3);
          display: inline-block;
          margin-left: px2rem(145);
        }
      }
    }
  }
}
</style>
