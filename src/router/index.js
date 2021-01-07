import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Ad from "@/components/ads/Ad";
import AdList from "@/components/ads/AdList";
import NewAd from "@/components/ads/NewAd";
import Login from "@/components/auth/Login";
import Registration from "@/components/auth/Registration";
import Orders from "@/components/user/Orders";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "home",
    component: Home,
  },
  {
    path: "/ad/:id",
    name: "ad",
    props: true,
    component: Ad,
  },
  {
    path: "/list",
    name: "list",
    component: AdList,
  },
  {
    path: "/new",
    name: "newAd",
    component: NewAd,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "registration",
    component: Registration,
  },
  {
    path: "/orders",
    name: "orders",
    component: Orders,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
