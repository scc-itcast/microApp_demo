<!--
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-10 14:36:49
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-16 15:16:16
 * @FilePath: \microApp_demo\vite_vue3_main\src\views\SmartBuildingEconomy.vue
 * @Description: 智慧楼宇经济
-->
<template>
  <div>
    <micro-app
      name="appname-SmartBuildingEconomy"
      :url="url"
      inline
      disablesandbox
      :data="microAppData"
      @created="handleCreate"
      @beforemount="handleBeforeMount"
      @mounted="handleMount"
      @unmount="handleUnmount"
      @error="handleError"
      @datachange="handleDataChange"
    ></micro-app>
  </div>
</template>

<script setup>
import { EventCenterForMicroApp } from '@micro-zoe/micro-app'
import config from '@/config'

// @ts-ignore 因为vite子应用关闭了沙箱，我们需要为子应用SmartBuildingEconomy创建EventCenterForMicroApp对象来实现数据通信
window.eventCenterForAppNameVite = new EventCenterForMicroApp('appname-SmartBuildingEconomy')
const url = `${config.SmartBuildingEconomy}/child/SmartBuildingEconomy/`
const microAppData = ref({
  type: 'init',
  openInterface: false,
  adaptorNotebook: false
})

const handleCreate = () => {
  // console.log("child-SmartBuildingEconomy 创建了");
}

const handleBeforeMount = () => {
  // console.log("child-SmartBuildingEconomy 即将被渲染");
}

const handleMount = () => {
  // console.log("child-SmartBuildingEconomy 已经渲染完成");

  setTimeout(() => {
    // @ts-ignore
    microAppData.value = { msg: '来自基座的新数据' }
  }, 2000)
}

const handleUnmount = () => {
  // console.log("child-SmartBuildingEconomy 卸载了");
}

const handleError = () => {
  // console.log("child-SmartBuildingEconomy 加载出错了");
}

const handleDataChange = (e) => {
  // console.log("来自子应用 child-SmartBuildingEconomy 的数据:", e.detail.data);
}
</script>

<style></style>
