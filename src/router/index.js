import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Contact from '../views/Contact.vue'
import Projets from '../views/Projets.vue'
import Page404 from '../views/Page404.vue'

const routes = [
  { path: '/home', name: Home, component: Home },
  { path: '/', redirect:'/home' },
  { path: '/presentation', name: AboutMe, component: AboutMe },
  { path: '/projets', name: Projets, component: Projets },
  { path: '/contact', name: Contact, component: Contact },
  { path: '/404', name: Page404, component: Page404 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    let pathSplit = to.path.split('/').pop(); // Split le path selon '/' et conserver uniquement le dernier extrait avec pop
    const pageActive = document.getElementById(pathSplit);
    let page404 = document.getElementById("404");
    let mainPage = document.getElementById("mainblock");
    let header = document.querySelector("Header");
    let footer = document.querySelector("Footer");
    // Rafraichir automatiquement la page après 3 sec et la rediriger vers '/home'
    function refreshPageAfterDelay(path) {
      setTimeout(() => {
        window.location.href = path;
      }, 3000);
    };

    if (pageActive || pathSplit === "") {
        page404.style.display="none";
        return {
            el: pageActive,
            behavior: "smooth",
        };

    } else {
      mainPage.style.display ="none";
      header.style.display ="none";
      footer.style.display="none";
      refreshPageAfterDelay('/home');
    }
  }

  
});

export default router;