<!--
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-13 16:23:35
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-17 14:18:29
 * @FilePath: \microApp_demo\vite_vue3_main\src\components\HeaderNav.vue
 * @Description: HeaderNav
-->
<template>
  <div id="HeaderNav">
    <div class="menu_list">
      <div
        v-for="(menu, index) in menuList"
        :key="index"
        class="menu_item_box"
        @mouseenter="mouseenter(menu.children, index)"
        @mouseleave="mouseleave"
      >
        <div v-show="mouseenterIndex === index" class="subMenu_list">
          <div
            v-for="(subMenu, subIdx) in formatChildrenShowMenu(menu.children)"
            :key="subIdx"
            :class="{
              subMenu_item: true,
              subMenu_item_active: activeSubMenuIndex === subIdx && activeMenuIndex === index
            }"
            @click="checkSubMenu(menu, subMenu, subIdx)"
          >
            <div>{{ subMenu.title }}</div>
          </div>
        </div>
        <div
          :class="{
            menu_item: true,
            menu_item_active: activeMenuIndex === index
          }"
          @click="checkMenu(menu, index)"
        >
          <div>{{ menu.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import microApp, { getActiveApps } from '@micro-zoe/micro-app'
import { menuList, routeNameList, hashNameList } from './data'

const router = useRouter()

let activeRouter = 0 // 当前激活菜单的 index

let activeMenuIndex = ref(0)
let activeSubMenuIndex = ref(null)
let mouseenterIndex = ref(null)

const formatChildrenShowMenu = (subMenu) => {
  return subMenu.filter((item) => item.isShow)
}

const checkSubMenu = (menu, subMenu, index) => {
  activeSubMenuIndex.value = index
  const { appName } = menu
  const { route } = subMenu
  select(route, subMenu, appName)
}

const checkMenu = (item, index) => {
  activeMenuIndex.value = index
  activeSubMenuIndex.value = null
  const { appName, route } = item
  const subMenu = item.children
  select(route, subMenu, appName)
}

const mouseenter = (subMenu, index) => {
  let show = subMenu.filter((item) => item.isShow).length > 0
  if (show) {
    mouseenterIndex.value = index
  }
}

const mouseleave = () => {
  mouseenterIndex.value = null
}

// 根据url地址获取选中菜单
const getActiveIndex = () => {
  // location.pathname的值通常为：/main/vite1/page2，我们只取`/vite1/page2`
  const pathArr = location.pathname.match(/\/app-.+/)
  activeRouter = pathArr ? pathArr[0].replace(/\/$/, '') : '/'
  activeMenuIndex.value = menuList.findIndex((item) => item.route === activeRouter)

  let hash = ''
  if (location.hash) {
    hash = location.hash.split('?')[0]
  }
  console.log('pathArr', location.pathname, hash, activeRouter)
  // 兼容 vite 子应用，因为它们是hash路由
  if (routeNameList.includes(activeRouter) && hashNameList.includes(hash.split('/')[1])) {
    activeRouter += hash.replace(/^#/, '')
    let subMenu = menuList[activeMenuIndex.value].children
    activeSubMenuIndex.value = subMenu.findIndex((item) => item.route === activeRouter)
  }

  // 去除斜线后缀，如：/app-x/ 转换为 /app-x
  if (activeRouter !== '/') {
    activeRouter = activeRouter.replace(/\/$/, '')
  }

  return activeRouter
}

// 用户点击菜单时控制基座应用跳转
const select = (index, subMenu, appName) => {
  // 因为 vite 子应用是hash路由，所以需要传递hash值
  console.log('index', index, appName)
  let hash = null
  let path = index
  if (path.split('/').length > 2) {
    const pathArr = index.split('/')
    path = '/' + pathArr[1]
    hash = '/' + pathArr[2]
  } else {
    let show = subMenu.filter((item) => item.isShow).length > 0
    if (show) {
      activeSubMenuIndex.value = 0
    }
  }
  // 获取子应用appName
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
      // path的值形式如：/app-xxx/page2，这里/app-xxx/page2才是页面地址，所以我们需要将/app-xxx部分删除
      childPath = path.replace(/^\/app-[^/]+/, '')
      !childPath && (childPath = '/') // 防止地址为空
    }
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

<style lang="scss" scoped>
#HeaderNav {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}
.menu_item,
.subMenu_item {
  width: 166px;
  height: 60px;
  font-size: 20px;
  font-family: MiSans-Demibold, MiSans;
  font-weight: 600;
  background: rgba(29, 29, 31, 0.05);
  border-radius: 4px 4px 4px 4px;
  color: rgba(29, 29, 31, 0.66);
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  backdrop-filter: blur(9px);
  cursor: pointer;
}
.menu_list {
  position: relative;
  display: flex;
  align-items: center;
  .menu_item_box {
    position: relative;
    display: flex;
    align-items: flex-end;
  }

  .menu_item {
    position: relative;
    margin: 0 10px;
  }
  .menu_item_active,
  .subMenu_item_active {
    background: #00a8ff;
    color: #fafafb;
  }
  .subMenu_list {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translate(-50%);
    width: auto;
    height: 60px;
    display: flex;
    .subMenu_item {
      width: 166px;
      height: 60px;
      margin: 0 10px;
    }
  }
}
</style>
