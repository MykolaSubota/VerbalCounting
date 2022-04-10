import { createRouter, createWebHistory } from "vue-router";
import HomeVuew from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVuew,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
