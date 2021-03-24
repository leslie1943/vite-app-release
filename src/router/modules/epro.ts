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
    ],
  },
]
export default routes
