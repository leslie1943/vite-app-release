import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/epro',
    name: 'Epro',
    redirect: '/epro/projects',
    component: () => import('@/layout/frameIn.vue'),
    children: [
      {
        path: '/epro/projects',
        name: 'Epro Projects',
        meta: {
          title: '易普首页',
          keepAlive: true,
        },
        component: () => import('@/views/Epro/index.vue'),
      },
      {
        path: '/vue3/features',
        name: 'Vue3 Features',
        meta: {
          title: 'Vue3 Features',
          keepAlive: true,
        },
        component: () => import('@/views/Vue3/index.vue'),
      },
      {
        path: '/vue2/features',
        name: 'Vue2 Features',
        meta: {
          title: 'Vue2 Features',
          keepAlive: true,
        },
        component: () => import('@/views/Vue2/index.vue'),
      },
    ],
  },
]
export default routes
