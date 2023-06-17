/*
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-13 09:25:34
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-17 14:00:28
 * @FilePath: \microApp_demo\vite_vue3_main\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import microApp from '@micro-zoe/micro-app'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from '@/App.vue'
import router from '@/router'
import '@/styles/index.scss'

microApp.start({
  plugins: {
    modules: {
      'appname-SmartBuildingEconomy': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/child\/SmartBuildingEconomy\/)/g, (all) => {
                return all.replace('/child/SmartBuildingEconomy/', 'http://localhost:5001/child/SmartBuildingEconomy/')
              })
            }

            return code
          }
        }
      ],
      'appname-vite1': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/child\/vite1\/)/g, (all) => {
                return all.replace('/child/vite1/', 'http://localhost:5011/child/vite1/')
              })
            }

            return code
          }
        }
      ]
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ElementPlus, { locale: zhCn })
app.mount('#app')
