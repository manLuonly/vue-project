// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 插件安装(挂载路由)
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // 路由分为一个大路由,大路由中包括电影页等四个页面,及电影页的两个小页面(正在热映,即将上映)
    // 大路由同级分为详情,用户(里面有登录页),搜索,城市列表四个页面
    {
      path: '/',
      // 引入路由组件
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          // 首页
          path: 'films',
          component: () => import('./views/Films.vue'),
          children: [
            {
              path: '',
              redirect: '/films/nowPlaying'
            },
            {
              path: 'nowPlaying',
              name: 'nowPlaying',
              component: () => import('./components/NowPlay/index.vue')
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
        // 9.9拼团
        {
          path: 'group',
          name: 'group',
          component: () => import('./views/Group.vue')
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
      // 传递ID
      path: '/film/:filmId',
      name: 'filmDetail',
      component: () => import('./views/FilmDetail.vue'),
      beforeEnter (to, from, next) {
        // console.log('路由独享的钩子函数');
        next();
      }
    },
    {
      // 用户
      path: '/user',
      component: {
        // 这个坑是login页面的
        template: `
          <div>
            <router-view></router-view>
          </div>
        `
      },
      children: [
        {
          path: 'card',
          // 下面这个注释是让页面请求的文件名为card.js,而不是0.js之类..
          component: () => import(/* webpackChunkName: "card" */ './views/Card.vue'),
          beforeEnter (to, from, next) {
            // 判断有没有登录
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
                  // 登录完成之后重新跳回登录之前的页面,而不是跳到登录页面
                  redirect: to.fullPath
                }
              })
            }
          }
        },
        {
          path: 'balance',
          component: () => import('./views/Balance.vue')
        },
        {
          path: 'setup',
          component: () => import('./views/Setup.vue')
        },
        // 登录
        {
          path: 'login',
          component: () => import('./views/Login.vue')
        }
      ]
    },
    // 搜索页...跟用户,详情页同级,从影院页(/cinemas)跳到搜索页(/search)
    {
      path: '/cinemas/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    // 城市列表
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/City.vue')
    },
    // 随便输入就跳到首页
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ]
});
// 添加进度条
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to, from, next) => {
  NProgress.done();
})

// 暴露
export default router;
