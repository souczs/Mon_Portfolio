import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Contact from '../views/Contact.vue'
import Creations from '../views/Creations.vue'
import Page404 from '../views/Page404.vue'

const routes = [
  { path: '/', name: Home, component: Home },
  { path: '/#presentation', name: AboutMe, component: AboutMe },
  { path: '/#creations', name: Creations, component: Creations },
  { path: '/#contact', name: Contact, component: Contact },
  { path: '/:pathMatch(.*)*', name: Page404, component: () => 
    import('../views/Page404.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;