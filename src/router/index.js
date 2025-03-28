import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    alias: "/",
    name: "home",
    component: HomeView,
    meta: { hideHeader: true },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
  {
    path: "/accommodation",
    name: "accommodation",
    component: () =>
      import(
        /* webpackChunkName: "accomodation" */ "@/views/AccommodationView.vue"
      ),
  },
  {
    path: "/destinations",
    name: "destinations",
    component: () =>
      import(
        /* webpackChunkName: "destinations" */ "@/views/DestinationsView.vue"
      ),
  },
  {
    path: "/information",
    name: "information",
    component: () =>
      import(
        /* webpackChunkName: "information" */ "@/views/InformationView.vue"
      ),
  },
  {
    path: "/map",
    name: "map",
    component: () =>
      import(/* webpackChunkName: "map" */ "@/views/MapView.vue"),
  },
  {
    path: "/transport",
    name: "transport",
    component: () =>
      import(/* webpackChunkName: "transport" */ "@/views/TransportView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
