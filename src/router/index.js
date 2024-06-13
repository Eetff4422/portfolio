import Vue from 'vue';
import Router from 'vue-router';
import Contact from '../components/Contact.vue';
import Details from '../components/Details.vue';
import Home from '../components/Home.vue';
import Projects from '../components/Projects.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Accueil' }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: { title: 'Projets' }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: { title: 'Contact' }
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta: { title: 'Détails' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

// Hook de navigation globale
router.beforeEach((to, from, next) => {
  const title = to.meta.title || 'Mon Portfolio';
  document.title = title;
  next();
});

export default router;
