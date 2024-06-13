import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import Contact from "../components/Contact.vue";
import Projects from "../components/Projects.vue";
import Details from "../components/Details.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/details",
      name: "Details",
      component: Details,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
