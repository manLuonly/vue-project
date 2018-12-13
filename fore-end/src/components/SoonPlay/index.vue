<template>
  <div class="film-list-content">
    <ul>
      <li
        v-for="(item, index) in films"
        :key="index">
        <div class="img">
          <img :src="item.poster" alt="">
        </div>
        <div class="info">
          <div>
            <span class="name">{{ item.name }}</span>
            <span class="type">{{ item.filmType.name }}</span>
          </div>
          <div>
            <span class="label">观众评分</span>
            <span class="grade">{{ item.grade }}</span>
          </div>
          <div>
            <span class="label">主演： {{ actorsList(item.actors) }}</span>
          </div>
          <div>
            <span class="label">{{ item.nation }} | {{ item.runtime }}分钟</span>
          </div>
        </div>
        <div class="buy">预约</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SoonPlay',

  data () {
    return {
      films: [],
      pageNum: 1, // 当前页码
      pageSize: 5, // 每页条数
      totalPage: 0 // 总页数
    }
  },

  methods: {
    /**
     * 获取影片
     */
    getFilms () {
      // localhost:3000/api/film/list
      axios.get('/api/film/list', {
        params: {
          // get 请求的参数要放在这个里面传递
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          type: 2
        }
      }).then((response) => {
        // PS: res 不单单包含后台给的数据，还有一些个额外的东西。
        // console.log(res);
        let result = response.data;
        console.log(result);
        if (result.code === 0) {
          this.films = result.data.films;
        } else {
          alert(result.msg);
        }
      })
    },

    /**
     * 排列我们主演列表
     * @param {Array} list 主演列表
     */
    actorsList (list) {
      let arr = [];
      arr = list.map(item => {
        return item.name;
      });

      return arr.join(' ');
    }
  },

  created () {
    this.getFilms();
  }
}
</script>

<style lang="scss">

</style>
