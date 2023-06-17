[micro-app 官方地址](https://zeroing.jd.com/)
[micro-app 官方 demo 地址](https://github.com/micro-zoe/micro-app-demo)
这篇文章主要是为了记录，本人在使用中遇到的一些问题，供参考

1. 资源找不到 -> 本地使用代理，显示 nginx 转发
2. 子应用使用组件插槽或者 pinia，路由懒加载报错问题 ->小项目几个路由不要懒加载，大项目中懒加载的时候不要使用 pinia 或者组件中不适用<slot>

网上的个人文章和官网的都差不多，都没有我遇到的问题，这篇文章只着重把我遇到的问题地方贴出来

# 资源找不到问题

## 用 vite，图片资源放在 public 下面，使用绝对地址引用图片

- 子应用在 public 文件夹中新建 assets 文件夹，在 assets 文件夹下建一个 vite1 文件夹，静态资源放置于此
- 主应用开发环境使用 proxy，线上环境使用 nginx 转发
- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26139765/1686983382026-88097c5e-7285-437a-92b0-2356e4463299.png#averageHue=%23b08a5d&clientId=u0f89ea01-5e9d-4&from=paste&height=622&id=u479dac54&originHeight=622&originWidth=1680&originalType=binary&ratio=1&rotation=0&showTitle=false&size=138456&status=done&style=none&taskId=uad556511-3d26-47a8-b14a-813873a0049&title=&width=1680)

## 子应用使用组件插槽或者 pinia，路由懒加载报错问题

- 小项目几个路由加载页面不使用懒加载，
- 大项目中懒加载的时候不要使用 pinia 或者组件中不适用<slot>

# 主应用为了美观重写菜单

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26139765/1686984720952-e4251c4a-e60c-4786-a902-18d7ac826e48.png#averageHue=%239b9b9b&clientId=u0f89ea01-5e9d-4&from=paste&height=410&id=u9b3aaae2&originHeight=410&originWidth=1021&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30379&status=done&style=none&taskId=u02f6c855-59b7-4861-a32d-14f5dd12dfc&title=&width=1021)

## HeaderNav 组件

```javascript
export const menuList = [
  {
    title: "home",
    appName: "home",
    route: "/",
    children: [],
  },
  {
    title: "vite1",
    appName: "appname-vite1",
    route: "/app-vite1",
    children: [
      {
        title: "home",
        route: "/app-vite1/home",
        hashName: "home",
        isShow: true,
      },
      {
        title: "page2",
        route: "/app-vite1/page2",
        hashName: "page2",
        isShow: true,
      },
    ],
  },
];
export const routeNameList = menuList.map((item) => item.route);
export const hashNameList = menuList.reduce((total, cur) => {
  const arr = cur.children.map((item) => item.hashName) || [];
  return (total = [...total, ...arr]);
}, []);
```

```vue
<!--
 * @Author: 
 * @Date: 2023-06-13 16:23:35
 * @LastEditors: 
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
              subMenu_item_active:
                activeSubMenuIndex === subIdx && activeMenuIndex === index,
            }"
            @click="checkSubMenu(menu, subMenu, subIdx)"
          >
            <div>{{ subMenu.title }}</div>
          </div>
        </div>
        <div
          :class="{
            menu_item: true,
            menu_item_active: activeMenuIndex === index,
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
import microApp, { getActiveApps } from "@micro-zoe/micro-app";
import { menuList, routeNameList, hashNameList } from "./data";

const router = useRouter();

let activeRouter = 0; // 当前激活菜单的 index

let activeMenuIndex = ref(0);
let activeSubMenuIndex = ref(null);
let mouseenterIndex = ref(null);

const formatChildrenShowMenu = (subMenu) => {
  return subMenu.filter((item) => item.isShow);
};

const checkSubMenu = (menu, subMenu, index) => {
  activeSubMenuIndex.value = index;
  const { appName } = menu;
  const { route } = subMenu;
  select(route, subMenu, appName);
};

const checkMenu = (item, index) => {
  activeMenuIndex.value = index;
  activeSubMenuIndex.value = null;
  const { appName, route } = item;
  const subMenu = item.children;
  select(route, subMenu, appName);
};

const mouseenter = (subMenu, index) => {
  let show = subMenu.filter((item) => item.isShow).length > 0;
  if (show) {
    mouseenterIndex.value = index;
  }
};

const mouseleave = () => {
  mouseenterIndex.value = null;
};

// 根据url地址获取选中菜单
const getActiveIndex = () => {
  // location.pathname的值通常为：/main/vite1/page2，我们只取`/vite1/page2`
  const pathArr = location.pathname.match(/\/app-.+/);
  activeRouter = pathArr ? pathArr[0].replace(/\/$/, "") : "/";
  activeMenuIndex.value = menuList.findIndex(
    (item) => item.route === activeRouter
  );

  let hash = "";
  if (location.hash) {
    hash = location.hash.split("?")[0];
  }
  console.log("pathArr", location.pathname, hash, activeRouter);
  // 兼容 vite 子应用，因为它们是hash路由
  if (
    routeNameList.includes(activeRouter) &&
    hashNameList.includes(hash.split("/")[1])
  ) {
    activeRouter += hash.replace(/^#/, "");
    let subMenu = menuList[activeMenuIndex.value].children;
    activeSubMenuIndex.value = subMenu.findIndex(
      (item) => item.route === activeRouter
    );
  }

  // 去除斜线后缀，如：/app-x/ 转换为 /app-x
  if (activeRouter !== "/") {
    activeRouter = activeRouter.replace(/\/$/, "");
  }

  return activeRouter;
};

// 用户点击菜单时控制基座应用跳转
const select = (index, subMenu, appName) => {
  // 因为 vite 子应用是hash路由，所以需要传递hash值
  console.log("index", index, appName);
  let hash = null;
  let path = index;
  if (path.split("/").length > 2) {
    const pathArr = index.split("/");
    path = "/" + pathArr[1];
    hash = "/" + pathArr[2];
  } else {
    let show = subMenu.filter((item) => item.isShow).length > 0;
    if (show) {
      activeSubMenuIndex.value = 0;
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
    hash && (path += `/#${hash}`);
    // 主应用跳转
    router.push(path);
  } else {
    let childPath = null;
    // child-vite 子应用是hash路由，hash值就是它的页面地址，这里单独处理
    if (hash) {
      childPath = hash;
    } else {
      // path的值形式如：/app-xxx/page2，这里/app-xxx/page2才是页面地址，所以我们需要将/app-xxx部分删除
      childPath = path.replace(/^\/app-[^/]+/, "");
      !childPath && (childPath = "/"); // 防止地址为空
    }
    // 主应用通过下发data数据控制子应用跳转
    microApp.setData(appName, { path: childPath });
  }
};

onMounted(() => {
  getActiveIndex();
  microApp.addGlobalDataListener((data) => {
    // console.log("全局数据:", data);
    getActiveIndex();
  });
  window.addEventListener("popstate", () => getActiveIndex());
});
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
```

## 路由改变菜单高亮改变

- 子应用中全局监听路由改变事件

```javascript
const route = useRoute();

const onRouteChange = () => {
  if (window.eventCenterForAppNameVite) {
    // 发送全局数据，通知侧边栏修改菜单展示
    window.eventCenterForAppNameVite.setGlobalData({ name: "child-vite1" });
  }
};

watch(
  () => route.name,
  () => {
    onRouteChange();
  }
);
```

# [demo 地址](https://github.com/scc-itcast/microApp_demo)

## 项目安装启动

- 分别进入 vite_vue3_main 和 vite_vue3_vite1 两个文件夹
- 执行 yarn 或者 npm install 安装依赖
- 执行 yarn dev 或者 npm run dev 运行项目
- 执行 yarn build 或者 npm run build 打包

## 打包部署

- 主应用生成的打包文件是 main 文件夹，放到 nginx 的 html 文件夹中
- 子应用生成的打包文件是 vite1 文件夹，放到 nginx 的 child 文件夹中

## nginx 启动

- 双击 nginx.exe
- 打开项目 127.0.0.1/main/
- 配置文件是 conf 文件夹中的 nginx.conf 文件
- 修改完配置文件，执行 ./nginx -s reload 重启 nginx
