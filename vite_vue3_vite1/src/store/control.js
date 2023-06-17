/*
 * @Description: 大屏控制数据
 * @Author: scc
 * @Date: 2022-09-29 11:38:51
 * @LastEditTime: 2022-09-29 11:54:19
 * @LastEditors: scc
 * @FilePath: \zyf-group-large_screen\src\store\control.js
 */
import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
export const useControlStore = defineStore('control', {
  state: () => {
    return {
      controlData: {}
    }
  },
  actions: {
    createSocketConnect() {
      let randomNum = ''
      if (sessionStorage.getItem('randomCode')) {
        randomNum = sessionStorage.getItem('randomCode')
      } else {
        randomNum = ('000000' + Math.floor(Math.random() * 999999)).slice(-6)
        sessionStorage.setItem('randomCode', randomNum)
      }
      let ws = new WebSocket(`ws://192.168.32.144:9001/ws/bigScreen?ID=1&randomCode=${randomNum}`)
      ws.onopen = () => {
        console.log('open')
      }
      ws.onmessage = (msg) => {
        let data = JSON.parse(msg.data)
        if (data.code == 200) {
          this.controlData = data
        } else {
          ElMessage.error(data.msg)
        }
      }
      ws.onerror = () => {
        console.log('error')
        // setTimeout(() => {
        //   this.createSocketConnect()
        // }, 5 * 1000)
      }
    }
  }
})
