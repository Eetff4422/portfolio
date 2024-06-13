import Vue from 'vue';
import Router from 'vue-router';
import Contact from '../components/Contact.vue';
import Details from '../components/Details.vue';
import Home from '../components/Home.vue';
import Projects from '../components/Projects.vue';
import i18n from '../main';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { titleKey: 'home_page_title' }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: { titleKey: 'projects_page_title' }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: { titleKey: 'contact_page_title' }
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta: { titleKey: 'details_page_title' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

// Hook de navigation globale
router.beforeEach((to, from, next) => {
  const titleKey = to.meta.titleKey;
  if (titleKey) {
    document.title = i18n.t(`message.${titleKey}`);
  } else {
    document.title = i18n.t('message.default_title');
  }
  next();
});

export default router;
