import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Contact from '../views/Contact.vue'
import Creations from '../views/Creations.vue'
import Page404 from '../views/Page404.vue'

const routes = [
  { path: '/', name: Home, component: Home },
  { path: '/presentation', name: AboutMe, component: AboutMe },
  { path: '/creations', name: Creations, component: Creations },
  { path: '/contact', name: Contact, component: Contact },
  { path: '/*', redirect: Page404 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    const pathSplit = to.path.split('/').pop();
    const pageActive = document.getElementById(pathSplit);

    if (pageActive) {
        return {
            el: pageActive,
            behavior: "smooth",
        };

    } else if (pathSplit !== "") {
        return router.push('/Error404');
    };

      return {top: 0, behavior: "smooth"};
},
});

export default router;