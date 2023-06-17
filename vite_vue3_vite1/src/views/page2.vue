<!--
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-10 14:43:39
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-15 10:55:44
 * @FilePath: \microApp_demo\vite-vue3-child\src\views\page2.vue
 * @Description: page2
-->
<template>
  <div>
    <h1>child-vite-page2</h1>
    <div class="child-vite-vue3-test-btn">test</div>
    <img :src="microAppLogo" alt="micro-app-logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const microAppLogo = "/assets/vite1/img/micro-app-logo.png";

export default defineComponent({
  name: "page2",
  setup() {
    return { microAppLogo };
  },
});
</script>

<style>
.child-vite-vue3-test-btn {
  height: 40px;
  width: 100px;
  background-color: red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: bolder;
  margin: 0 auto;
  user-select: none;
}
</style>
