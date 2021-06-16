import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/Home.vue");
const Days = () => import("../views/Days.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      home: Home,
    },
  },
  {
    path: "/days/:day_id",
    name: "Days",
    components: {
      days: Days,
    },
    props: true,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
