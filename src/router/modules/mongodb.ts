import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/mongodb',
    name: 'mongodb',
    redirect: '/mongodb/index',
    component: () => import('@/layout/frameIn.vue'),
    children: [
      {
        path: '/mongodb/index',
        name: 'MongoDB Home',
        meta: {
          title: 'MongoDB Home',
          keepAlive: true,
        },
        component: () => import('@/views/MongoDB/index.vue'),
      },
    ],
  },
]
export default routes
