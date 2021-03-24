import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: () => import('@/layout/frameIn.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页',
          keepAlive: true,
        },
        component: () => import('@/views/Home/index.vue'),
      },
    ],
  },
]
export default routes
