/*
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-09 11:04:08
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-17 13:49:07
 * @FilePath: \micro-app-demo-master\main_apps\vite-vue3\src\router.ts
 * @Description: router
 */
import { createRouter, createWebHistory } from 'vue-router'
import CIMBase from '@/views/CIMBase.vue'

const routes = [
  {
    path: '/',
    name: '/home',
    redirect: '/app-CIMBase'
  },
  {
    // 因为主应用为history路由，appname-vite子应用是hash路由，这里配置略微不同
    // 已解决带参数时页面丢失的问题
    path: '/app-vite1:page*',
    name: 'app-vite1',
    title: 'vite1',
    component: () => import('@/views/vite1.vue')
  },
  {
    path: '/app-CIMBase',
    name: '/app-CIMBase',
    title: 'CIM底座',
    component: CIMBase
  },
  {
    path: '/app-BIMGlobalCoverage',
    name: 'app-BIMGlobalCoverage',
    title: 'BIM全域覆盖',
    component: () => import('@/views/BIMGlobalCoverage.vue')
  },
  {
    path: '/app-SmartSiteSafetySupervision',
    name: 'app-SmartSiteSafetySupervision',
    title: '智慧工地安监',
    component: () => import('@/views/SmartSiteSafetySupervision.vue')
  },
  {
    path: '/app-SmartConstructionDemonstration',
    name: 'app-SmartConstructionDemonstration',
    title: '智能建造示范',
    component: () => import('@/views/SmartConstructionDemonstration.vue')
  },
  {
    path: '/app-IntelligentBuildingManage',
    name: 'app-IntelligentBuildingManage',
    title: '智能建筑管理',
    component: () => import('@/views/IntelligentBuildingManage/index.vue')
  },
  {
    path: '/app-IntelligentBuildingManage/Second',
    name: 'Second',
    title: '高铁之心详情',
    component: () => import('@/views/IntelligentBuildingManage/Second.vue')
  },
  {
    // 因为主应用为history路由，appname-vite子应用是hash路由，这里配置略微不同
    // 已解决带参数时页面丢失的问题
    path: '/app-SmartBuildingEconomy:page*',
    name: 'app-SmartBuildingEconomy',
    title: '智慧楼宇经济',
    component: () => import('@/views/SmartBuildingEconomy.vue')
  },
  {
    path: '/app-IntelligentConnectedVehicles',
    name: 'app-IntelligentConnectedVehicles',
    title: '智能网联车辆',
    component: () => import('@/views/IntelligentConnectedVehicles.vue')
  },
  {
    path: '/app-TwoCarbonPilotDemonstration',
    name: 'app-TwoCarbonPilotDemonstration',
    title: '双碳先导示范',
    component: () => import('@/views/TwoCarbonPilotDemonstration.vue')
  },
  {
    path: '/app-SmartUndergroundPipeNetwork',
    name: 'app-SmartUndergroundPipeNetwork',
    title: '智慧地下管网',
    component: () => import('@/views/SmartUndergroundPipeNetwork.vue')
  }
]

const router = createRouter({
  // 设置主应用基础路由为main-vite(用于后续部署)，则子应用基础路由(baseroute)为/main-vite/xxx
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
