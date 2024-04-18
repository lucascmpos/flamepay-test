import { createRouter, createWebHistory } from "vue-router";
import MethodView from "../views/method-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MethodView,
    },
    {
      path: "/",
      name: "home",
      component: MethodView,
    },
    {
      path: "/",
      name: "home",
      component: MethodView,
    },
  ],
});

export default router;
