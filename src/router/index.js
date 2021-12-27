import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
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
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    }
  }
});

export default router;
