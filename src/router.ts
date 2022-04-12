import { createRouter, createWebHistory } from "vue-router";
import CrudeOil from "./components/pages/CrudeOil.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/crudeOil",
      component: CrudeOil,
    },
  ],
});

export default router;
