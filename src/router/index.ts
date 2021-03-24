import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import home from './modules/home'
import mongodb from './modules/mongodb'
import login from './modules/login'
import epro from './modules/epro'
const routes: Array<RouteRecordRaw> = [...home, ...mongodb, ...login, ...epro]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
