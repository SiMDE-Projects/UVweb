import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/uv/:name",
    name: "uv",
    component: function () {
      return import(/* webpackChunkName: "uv" */ "../views/UvView.vue");
    },
  },
  {
    path: "/post",
    name: "post",
    component: function () {
      return import(/* webpackChunkName: "post" */ "../views/PostView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
