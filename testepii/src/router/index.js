import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Table from "../views/Table.vue";
import Insurance from "../views/Insurance.vue";
import InsAut from "../views/InsAut.vue";
import InsHab from "../views/InsHab.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/table",
    name: "Table",
    component: Table
  },
  {
    path: "/insurance",
    name: "Insurance",
    component: Insurance
  },
  {
    path: "/insAut",
    name: "InsAut",
    component: InsAut
  },
  {
    path: "/insHab",
    name: "InsHab",
    component: InsHab
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
