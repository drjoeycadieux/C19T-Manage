import Vue from "vue";
import Router from "vue-router";
import router from "./router";
import Logger from "./globals/Logger";

Vue.use(Router);

let router = new Router({
  mode: "history",
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active", // active class for *exact* links.
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
});

Logger("success", "Router initialized successfully.");

export default router;
