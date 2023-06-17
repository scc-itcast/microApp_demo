/*
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-16 16:16:59
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-17 14:55:46
 * @FilePath: \microApp_demo\vite_vue3_main\src\components\HeaderNav\data.js
 * @Description: data
 */
export const menuList = [
  {
    title: 'home',
    appName: 'home',
    route: '/',
    children: []
  },
  {
    title: 'vite1',
    appName: 'appname-vite1',
    route: '/app-vite1',
    children: [
      {
        title: 'home',
        route: '/app-vite1/home',
        hashName: 'home',
        isShow: true
      },
      {
        title: 'page2',
        route: '/app-vite1/page2',
        hashName: 'page2',
        isShow: true
      }
    ]
  }
]
export const routeNameList = menuList.map((item) => item.route)
export const hashNameList = menuList.reduce((total, cur) => {
  const arr = cur.children.map((item) => item.hashName) || []
  return (total = [...total, ...arr])
}, [])
