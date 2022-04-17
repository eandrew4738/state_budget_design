import { createRouter, createWebHistory } from "vue-router";
import AbuSafa from "./components/pages/AbuSafa.vue";
import CrudeOil from "./components/pages/CrudeOil.vue";
import HomePage from "./components/pages/HomePage.vue";
import OverallPage from "./components/pages/OverallPage.vue";
import ProfilePage from "./components/pages/ProfilePage.vue";
import App from "./App.vue";

const router = createRouter({
  linkActiveClass: "active-route",
  history: createWebHistory(),
  routes: [
    {
      path: "",
      redirect: "/crudeOil",
    },
    {
      path: "/AbuSafa",
      component: AbuSafa,
    },
    {
      path: "/crudeOil",
      component: CrudeOil,
    },
    {
      path: "/Home",
      component: HomePage,
    },
    {
      path: "/Overall",
      component: OverallPage,
    },
    {
      path: "/Profile",
      component: ProfilePage,
    },
  ],
});
export default router;
