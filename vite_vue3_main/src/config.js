/*
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-13 09:25:34
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-17 13:47:43
 * @FilePath: \microApp_demo\vite_vue3_main\src\config.ts
 * @Description: config
 */
// 开发环境地址
const config = {
  SmartBuildingEconomy: 'http://localhost:5001',
  vite1: 'http://localhost:5011'
}

// 线上环境地址
if (process.env.NODE_ENV === 'production') {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(config).forEach((key) => {
    config[key] = window.location.origin
  })
}

export default config
