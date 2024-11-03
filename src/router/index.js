import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Creations from '../views/Creations.vue'
import Page404 from '../views/Page404.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/creations', component: Creations },
  { path: '/error', component: Page404 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;