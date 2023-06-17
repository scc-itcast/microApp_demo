/*
 * @Author: guoke scc15599065860@163.com
 * @Date: 2023-06-10 14:43:39
 * @LastEditors: guoke scc15599065860@163.com
 * @LastEditTime: 2023-06-17 14:06:14
 * @FilePath: \microApp_demo\vite-vue3-child\src\router.ts
 * @Description: router
 */
import Home from "./views/home.vue";

const routes = [
  {
    path: "/",
    name: "transfer",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/page2",
    name: "page2",
    component: () => import("./views/page2.vue"),
  },
];

export default routes;
