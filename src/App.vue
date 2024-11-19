<template>
  <div id="app">
      <Header />

      <main>
        <section id="home">
          <Home />
        </section>
        <section id="presentation">
          <AboutMe />
        </section>
        <section id="projets">
          <Creations />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
  </div>
</template>

<script>
import Header from '../src/components/Header.vue'
import Home from './views/Home.vue'
import AboutMe from './views/AboutMe.vue'
import Creations from '../src/views/Creations.vue'
import Contact from '../src/views/Contact.vue'
import Footer from '../src/components/Footer.vue'

export default {
  components: {
    Header,
    Home,
    AboutMe,
    Creations,
    Contact,
    Footer,
  },
};
</script>

<style scoped>
  @import url(./assets/main.css);
</style>
