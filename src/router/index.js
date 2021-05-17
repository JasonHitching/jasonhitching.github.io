import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import BlogHome from "@/views/BlogHome.vue";
import BlogPost from "@/components/BlogPost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/blog/",
    name: "BlogHome",
    component: BlogHome
  },
  {
    path: "/blog/:slug",
    name: "blog-post",
    component: BlogPost
  }
];

const router = new VueRouter({
  routes
});

export default router;
