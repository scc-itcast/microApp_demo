<!--
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-13 09:25:34
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-17 14:11:07
 * @FilePath: \microApp_demo\vite_vue3_main\src\App.vue
 * @Description: App
-->
<template>
  <div class="mainapp_container">
    <div class="mainapp_router_view">
      <router-view />
    </div>
    <HeaderNav class="mainapp_nav"></HeaderNav>
  </div>
</template>

<script setup>
import HeaderNav from '@/components/HeaderNav/index.vue'
</script>

<style>
.mainapp_container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.mainapp_router_view {
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.mainapp_nav {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 3;
}
</style>
