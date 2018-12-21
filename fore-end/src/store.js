import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 登录名
    userName: localStorage.getItem('userName'),
    // 购物车属性
    filmsCard: localStorage.getItem('filmsCard') ? JSON.parse(localStorage.getItem('filmsCard')) : []
  },
  getters: {

  },
  mutations: {
    // 添加电影
    addFilm (state, payload) {
      let filmId = payload.filmId;
      // 判断当前的电影是否已经加入购物车
      let index = -1;
      let isZai = state.filmsCard.some((item, i) => {
        if (item.filmId === filmId) {
          index = i;
          return true;
        }
        return false;
      });

      if (isZai) {
        // 存在加一
        state.filmsCard[index].filmNum++;
      } else {
        // 不存在,就添加一个
        state.filmsCard.push({
          // 电影id
          filmId: payload.filmId,
          // 电影名称
          filmName: payload.name,
          // 电影价格
          filmPrice: Math.random(20, 50),
          // 电影数量
          filmNum: 1
        });
      }
      // 将数据写入localStorage
      localStorage.setItem('filmsCard', JSON.stringify(state.filmsCard));
    },
    // 删除购物车
    reduceFilm (state, payload) {
      let index = -1;
      state.filmsCard.forEach((item, i) => {
        if (item.filmId === payload.filmId) {
          index = i;
        }
      })
      // 判断是否有
      if (index > -1) {
        let film = state.filmsCard[index];
        if (film.filmNum > 1) {
          film.filmNum--;
        } else {
          state.filmsCard.splice(index, 1);
        }
      }
      // 将数据写入localStorage
      localStorage.setItem('filmsCard', JSON.stringify(state.filmsCard));
    }
  },
  actions: {

  },
  modules: {

  }
})

export default store;
