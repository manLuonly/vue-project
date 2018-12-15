// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// 引入路由组件
// import Films from './views/Films.vue';
// import Cinema from './views/Cinema.vue';
// import NowPlay from './components/NowPlay';
// import SoonPlay from './components/SoonPlay';
// import Center from './views/Center.vue';

// 插件安装(挂载路由)
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
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
          // 下面这个注释是让页面请求的文件名为card.js,而不是0.js之类..
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
                  // 登录完成之后重新跳回登录之前的页面,而不是跳到登录页面
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
// 添加进度条
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to, from, next) => {
  NProgress.done();
})

// 需要暴露
export default router;
