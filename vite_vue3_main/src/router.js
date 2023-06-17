/*
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-13 09:25:34
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-17 15:06:15
 * @FilePath: \microApp_demo\vite_vue3_main\src\router.js
 * @Description: router
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'

const routes = [
  {
    path: '/',
    name: '/home',
    component: Home
  },
  {
    // 因为主应用为history路由，appname-vite子应用是hash路由，这里配置略微不同
    // 已解决带参数时页面丢失的问题
    path: '/app-vite1:page*',
    name: 'app-vite1',
    title: 'vite1',
    component: () => import('@/views/vite1.vue')
  }
]

const router = createRouter({
  // 设置主应用基础路由为main-vite(用于后续部署)，则子应用基础路由(baseroute)为/main-vite/xxx
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
