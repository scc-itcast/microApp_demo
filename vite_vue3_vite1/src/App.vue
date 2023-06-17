<!--
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-10 14:43:39
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-17 14:11:41
 * @FilePath: \microApp_demo\vite-vue3-child\src\App.vue
 * @Description: App
-->
<template>
  <div>
    <div id="public-links" @click="onRouteChange">
      <router-link to="/">Home</router-link> |
      <router-link to="/page2">Page2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
// 子应用内部跳转时，通知侧边栏改变菜单状态
import useCommonStore from "@/store/common";
const commonStore = useCommonStore();
const route = useRoute();

onMounted(() => {
  console.log("adaptorNotebook", commonStore.adaptorNotebook);
});

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
</script>

<style>
#vite-app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
