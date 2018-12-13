// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入路由组件
// import Films from './views/Films.vue';
// import Cinema from './views/Cinema.vue';
// import NowPlay from './components/NowPlay';
// import SoonPlay from './components/SoonPlay';
// import Center from './views/Center.vue';

// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          // 首页
          path: 'films',
          name: 'films',
          component: () => import('./views/Films.vue'),
          children: [
            {
              path: 'nowPlaying',
              name: 'nowPlaying',
              component: () => import('./components/NowPaly/index.vue')
            },
            {
              path: 'comingSoon',
              name: 'comingSoon',
              component: () => import('./components/SoonPlay/index.vue')
            }
          ]
        },
        {
          // 影院页
          path: 'cinemas',
          name: 'cinemas',
          component: () => import('./views/Cinema.vue')
        },
        {
          // 个人中心页
          path: 'center',
          name: 'center',
          component: () => import('./views/Center.vue')
        }
      ]
    },
    {
      // 详情页面
      path: '/film/:filmId',
      name: 'filmDetail',
      component: () => import('./views/FilmDetail.vue'),
      beforeEnter (to, from, next) {
        console.log('路由独享的钩子函数');
        next();
      }
    },
    {
      // 用户
      path: '/user',
      component: {
        template: `
          <div>
            <router-view></router-view>
          </div>
        `
      },
      children: [
        {
          path: 'card',
          component: () => import(/* webpackChunkName: "card" */ './views/Card.vue'),
          beforeEnter (to, from, next) {
            // 用没有登录
            if (localStorage.getItem('userName')) {
              next();
            } else {
              // 注意，如果需要实现，拦截到登陆页面之后，登录成功回跳到那个页面。
              // localStorage.setItem('myNeedPage', '/user/card');
              // next('/user/login');
              console.log(to.fullPath);
              next({
                path: '/user/login',
                query: {
                  redirect: to.fullPath
                }
              })
            }
          }
        },
        {
          path: 'login',
          component: () => import('./views/Login.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ]
});

// 需要暴露
export default router;
