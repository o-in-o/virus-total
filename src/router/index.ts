import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UrlCheckerView from "@/views/UrlCheckerView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/url-check",
    name: "url-check",
    component: UrlCheckerView,
  },
  {
    path: "*",
    name: "error-page",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../pages/ErrorPage/ErrorPage.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
