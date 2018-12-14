<template>
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../images/pic-1.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../images/pic-2.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../images/pic-3.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../images/pic-4.jpg" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <!-- /轮播图 -->
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss">
@import '../../styles/common/px2rem.scss';
@import './index.scss';
</style>
