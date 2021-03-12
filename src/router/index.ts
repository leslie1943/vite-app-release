import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: () => import('../layout/frameIn.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页',
          keepAlive: true,
        },
        component: () => import('../views/Home/index.vue'),
      },
    ],
  },
  {
    path: '/mongodb',
    name: 'mongodb',
    redirect: '/mongodb/index',
    component: () => import('../layout/frameIn.vue'),
    children: [
      {
        path: '/mongodb/index',
        name: 'MongoDB Home',
        meta: {
          title: 'MongoDB Home',
          keepAlive: true,
        },
        component: () => import('../views/MongoDB/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
    },
    component: () => import('../views/Login/index'),
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
