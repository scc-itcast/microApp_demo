<!--
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-13 16:23:35
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-16 13:57:50
 * @FilePath: \microApp_demo\vite_vue3_main\src\components\HeaderNav.vue
 * @Description: HeaderNav
-->
<template>
  <div id="HeaderNav">
    <el-menu class="el-menu-vertical-demo" :default-active="activeIndex" mode="horizontal" @select="select">
      <el-menu-item index="/">
        <template #title>首页</template>
      </el-menu-item>
      <!-- 菜单(el-sub-menu) index为子应用名称，子菜单(el-menu-item) index为路由地址 -->
      <el-sub-menu index="appname-SmartBuildingEconomy">
        <template #title>
          <span class="sub-menu-text">child-vite</span>
        </template>
        <el-menu-item index="/app-SmartBuildingEconomy/Overview">
          <span class="menu-item-text">Overview</span>
        </el-menu-item>
        <el-menu-item index="/app-SmartBuildingEconomy/IndustryDev">
          <span class="menu-item-text">IndustryDev</span>
        </el-menu-item>
        <el-menu-item index="/app-SmartBuildingEconomy/LeaseInvest">
          <span class="menu-item-text">LeaseInvest</span>
        </el-menu-item>
        <el-menu-item index="/app-SmartBuildingEconomy/ManageOperate">
          <span class="menu-item-text">ManageOperate</span>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="app-vite2">
        <template #title>
          <span class="sub-menu-text">vite1</span>
        </template>
        <el-menu-item index="/vite2">
          <span class="menu-item-text">Overview</span>
        </el-menu-item>
        <el-menu-item index="/vite2/IndustryDev">
          <span class="menu-item-text">IndustryDev</span>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="child2">
        <template #title>
          <span class="sub-menu-text">child2</span>
        </template>
        <el-menu-item index="/child2">
          <span class="menu-item-text">Overview</span>
        </el-menu-item>
        <el-menu-item index="/child2/ManageOperate">
          <span class="menu-item-text">ManageOperate</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import microApp, { getActiveApps } from '@micro-zoe/micro-app'
const router = useRouter()

const activeIndex = ref('/') // 当前激活菜单的 index

const menuList = [
  {
    title: 'CIM底座',
    appName: 'appname-CIMBase',
    route: '/app-CIMBase',
    routeName: 'app-CIMBase',
    children: []
  },
  {
    title: 'BIM全域覆盖',
    appName: 'appname-BIMGlobalCoverage',
    route: '/app-BIMGlobalCoverage',
    routeName: 'app-BIMGlobalCoverage'
  },
  {
    title: '智慧工地安监',
    appName: 'appname-SmartSiteSafetySupervision',
    route: '/app-SmartSiteSafetySupervision',
    routeName: 'app-SmartSiteSafetySupervision',
    children: []
  },
  {
    title: '智能建造示范',
    appName: 'appname-SmartConstructionDemonstration',
    route: '/app-SmartConstructionDemonstration',
    routeName: 'app-SmartConstructionDemonstration',
    children: [
      {
        title: 'BIM数字一体化',
        route: '/app-SmartConstructionDemonstration/BIMDigitalIntegration',
        hashName: 'BIMDigitalIntegration',
        isShow: false
      },
      {
        title: '部品部件',
        route: '/app-SmartConstructionDemonstration/Part',
        hashName: 'Part',
        isShow: false
      },
      {
        title: '智能施工管理',
        route: '/app-SmartConstructionDemonstration/IntelligentConstructionManage',
        hashName: 'IntelligentConstructionManage',
        isShow: false
      },
      {
        title: '机器人及智能装备',
        route: '/app-SmartConstructionDemonstration/RobotsAndIntelligentEquip',
        hashName: 'RobotsAndIntelligentEquip',
        isShow: false
      },
      {
        title: '建筑产业互联网',
        route: '/app-SmartConstructionDemonstration/ConstructionIndustryInternet',
        hashName: 'ConstructionIndustryInternet',
        isShow: false
      },
      {
        title: '数字交付与运维',
        route: '/app-SmartConstructionDemonstration/DigitalDeliveryAndOperat',
        hashName: 'DigitalDeliveryAndOperat',
        isShow: false
      }
    ]
  },
  {
    title: '智能建筑管理',
    appName: 'appname-IntelligentBuildingManage',
    route: '/app-IntelligentBuildingManage',
    routeName: 'app-IntelligentBuildingManage',
    children: [
      {
        title: '高铁之心详情',
        route: '/app-IntelligentBuildingManage/Second',
        hashName: 'Second',
        isShow: false
      }
    ]
  },
  {
    title: '智慧楼宇经济',
    appName: 'appname-SmartBuildingEconomy',
    route: '/app-SmartBuildingEconomy',
    routeName: 'app-SmartBuildingEconomy',
    children: [
      {
        title: '总体概览',
        route: '/app-SmartBuildingEconomy/Overview',
        hashName: 'Overview',
        isShow: true
      },
      {
        title: '楼宇经济详情',
        route: '/app-SmartBuildingEconomy/Second',
        hashName: 'Second',
        isShow: false
      },
      {
        title: '产业发展',
        route: '/app-SmartBuildingEconomy/IndustryDev',
        hashName: 'IndustryDev',
        isShow: true
      },
      {
        title: '租赁招商',
        route: '/app-SmartBuildingEconomy/LeaseInvest',
        hashName: 'LeaseInvest',
        isShow: true
      },
      {
        title: '经营运维',
        route: '/app-SmartBuildingEconomy/ManageOperate',
        hashName: 'ManageOperate',
        isShow: true
      }
    ]
  },
  {
    title: '智能网联车辆',
    appName: 'appname-SmartBuilding',
    route: '/app-SmartBuilding',
    routeName: 'app-SmartBuilding',
    children: []
  },
  {
    title: '双碳先导示范',
    appName: 'appname-SmartBuilding',
    route: '/app-SmartBuilding',
    routeName: 'app-SmartBuilding',
    children: []
  },
  {
    title: '智慧地下管网',
    appName: 'appname-SmartUndergroundPipeNetwork',
    route: '/app-SmartUndergroundPipeNetwork',
    routeName: 'app-SmartUndergroundPipeNetwork',
    children: []
  }
]

const routeNameList = menuList.map((item) => `/${item.routeName}`)

// 根据url地址获取选中菜单
const getActiveIndex = () => {
  // location.pathname的值通常为：/main-vite/vite1/page2，我们只取`/vite1/page2`
  const pathArr = location.pathname.match(/\/app-.+/)
  activeIndex.value = pathArr ? pathArr[0].replace(/\/$/, '') : '/'

  let hash = ''
  if (location.hash) {
    hash = location.hash.split('?')[0]
  }
  console.log('pathArr', pathArr, location.pathname, hash)
  let hashArr = ['Overview', 'IndustryDev', 'LeaseInvest', 'ManageOperate']
  // 兼容 child-vite 和 child-react17 子应用，因为它们是hash路由
  if (routeNameList.includes(activeIndex.value) && hashArr.includes(hash.split('/')[1])) {
    activeIndex.value += hash.replace(/^#/, '')
  }

  // 去除斜线后缀，如：/app-x/ 转换为 /app-x
  if (activeIndex.value !== '/') {
    activeIndex.value = activeIndex.value.replace(/\/$/, '')
  }

  return activeIndex.value
}

// 用户点击菜单时控制基座应用跳转
const select = (index, indexPath) => {
  // 因为 child-vite 子应用是hash路由，所以需要传递hash值
  console.log('index', index, indexPath)
  let hash = null
  let path = index
  if (path.length > 7) {
    const pathArr = index.split('/')
    path = '/' + pathArr[1]
    hash = '/' + pathArr[2]
  }
  // 获取子应用appName
  const appName = indexPath[0]
  // console.log("appName", appName, path, hash);
  // 控制基座跳转页面，并渲染子应用
  /**
   * 当子应用还未渲染，通过基座控制路由跳转，子应用在初始化时会自己根据url渲染对应的页面
   * 当子应用已经渲染，则直接控制子应用进行内部跳转
   *
   * getActiveApps: 用于获取正在运行的子应用
   */
  if (!getActiveApps().includes(appName)) {
    // child-vite 子应用为hash路由，这里拼接一下hash值
    hash && (path += `/#${hash}`)
    // 主应用跳转
    router.push(path)
  } else {
    let childPath = null
    // child-vite 子应用是hash路由，hash值就是它的页面地址，这里单独处理
    if (hash) {
      childPath = hash
    } else {
      // path的值形式如：/app-vue2/page2，这里/app-vue2是子应用的基础路由，/page2才是页面地址，所以我们需要将/app-vue2部分删除
      childPath = path.replace(/^\/vite[^/]+/, '')
      !childPath && (childPath = '/') // 防止地址为空
    }
    // console.log("path", path, childPath);
    // 主应用通过下发data数据控制子应用跳转
    microApp.setData(appName, { path: childPath })
  }
}

onMounted(() => {
  getActiveIndex()
  microApp.addGlobalDataListener((data) => {
    // console.log("全局数据:", data);
    getActiveIndex()
  })
  window.addEventListener('popstate', () => getActiveIndex())
})
</script>

<style>
#HeaderNav {
  width: 100%;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: inline-block;
}
.el-menu-vertical-demo {
  font-size: 18px;
}
</style>
