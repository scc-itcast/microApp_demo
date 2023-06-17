/*
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-10 14:43:39
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-15 11:18:24
 * @FilePath: \microApp_demo\vite-vue3-child\src\main.js
 * @Description: 入口文件
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router";

// 与基座进行数据交互
function handleMicroData(router) {
  // eventCenterForAppNameVite 是基座添加到window的数据通信对象
  if (window.eventCenterForAppNameVite) {
    // 主动获取基座下发的数据
    console.log(
      "child-vite1 getData:",
      window.eventCenterForAppNameVite.getData()
    );

    // 监听基座下发的数据变化
    window.eventCenterForAppNameVite.addDataListener((data) => {
      console.log("child-vite1 addDataListener:", data);

      if (data.path && typeof data.path === "string") {
        data.path = data.path.replace(/^#/, "");
        // 当基座下发path时进行跳转
        if (data.path && data.path !== router.currentRoute.value.path) {
          router.push(data.path);
        }
      }
    });

    // 向基座发送数据
    setTimeout(() => {
      window.eventCenterForAppNameVite.dispatch({ myname: "child-vite1" });
    }, 3000);
  }
}

// ----------分割线---umd模式-------------- //
let app = null;
let router = null;
let history = null;
// 将渲染操作放入 mount 函数
function mount() {
  history = createWebHashHistory();
  router = createRouter({
    history,
    routes,
  });

  app = createApp(App);
  app.use(router);
  app.use(createPinia());
  app.use(ElementPlus, { locale: zhCn });
  app.mount("#vite1");

  console.log("微应用child-vite1渲染了");

  handleMicroData(router);

  // fixBugForVueRouter4(router)
}

// 将卸载操作放入 unmount 函数
function unmount() {
  app?.unmount();
  history?.destroy();
  // 卸载所有数据监听函数
  window.eventCenterForAppNameVite?.clearDataListener();
  app = null;
  router = null;
  history = null;
  console.log("微应用child-vite1卸载了");
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_BASE_APPLICATION__) {
  // @ts-ignore
  window["micro-app-appname-vite1"] = { mount, unmount };
} else {
  // 非微前端环境直接渲染
  mount();
}
