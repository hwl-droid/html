import Vue from "vue";
import VueRouter from "vue-router";
import register from "../views/register.vue";
import login from "../views/login.vue";
import userinof from "../views/userinof.vue";
import edit from "../views/edit.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    component: register
  },
  {
    path: "/login",
    component: login
  },
  {
    path: "/userinof",
    component: userinof,
    meta: {
      istoken: true
    }
  },
  {
    path: "/edit",
    component: edit,
    meta: {
      istoken: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (
    !localStorage.getItem("token") &&
    !localStorage.getItem("id") &&
    to.meta.istoken === true
  ) {
    router.push("/login");
    Vue.prototype.$msg.fail("请重新登陆");
    return;
  }
  next();
});
export default router;
