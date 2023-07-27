<!--
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-13 09:25:34
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-07-27 10:27:23
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

// 向UE发信息
const onConfigButton = () => {
  try {
    let descriptor = {
      Category: 'Category',
      Name: 'Name',
      Parameters: {}
    }
    // console.log('descriptor', descriptor)
    if (window.stream && window.stream.emitUIInteraction) window.stream.emitUIInteraction(descriptor)
  } catch (error) {
    console.log('onConfigButton', error)
  }
}

const blobToDataURL = (blob, cb) => {
  let reader = new FileReader()
  reader.onload = function (evt) {
    let base64 = evt.target.result
    cb(base64)
  }
  reader.readAsDataURL(blob)
}

// 监听UE发送过来的信息
const myHandleResponseFunction = (data) => {
  const parseData = isString(data) ? JSON.parse(data) : data
  if (parseData.type === 'onResponseFileContents') {
    blobToDataURL(data.received, (base64Url) => {
      console.log('myHandleResponseFunction', base64Url)
    })
  } else {
    console.log('parseData', parseData)
  }
}

const onParagonLoad = () => {
  // console.log('stream', window.stream)
  if (window.stream.addResponseEventListener) {
    window.stream.addResponseEventListener('handle_responses', myHandleResponseFunction)
  }
}

const onRemoveParagonLoad = () => {
  if (window.stream.removeResponseEventListener) {
    window.stream.removeResponseEventListener('handle_responses', myHandleResponseFunction)
  }
}

onMounted(() => {
  if (!window.stream) {
    window.addEventListener('load', onParagonLoad)
  } else {
    onParagonLoad()
  }
})
onUnmounted(() => {
  onRemoveParagonLoad()
})
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
