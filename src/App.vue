<script>
import { RouterLink, RouterView } from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Creations from './views/Creations.vue'
import Page404 from './views/Page404.vue'
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'
import Modal from '../src/components/Modal.vue'

export default {
  components: {
    Home,
    Contact,
    Creations,
    Header,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <Home />
    <Creations />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped>

</style>
