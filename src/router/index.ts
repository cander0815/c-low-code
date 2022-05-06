import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import layout from "@/layout/main";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: layout,
    redirect: "home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
