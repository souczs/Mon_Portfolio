<template>
  <div id="app">
      <Header />

      <main id="mainblock">
        <section id="home">
          <Home />
        </section>
        <section id="presentation">
          <AboutMe />
        </section>
        <section id="projets">
          <Projets />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <section id="404">
          <Page404 />
      </section>

      <Footer />
  </div>
</template>

<script>
import Header from '../src/components/Header.vue'
import Home from './views/Home.vue'
import AboutMe from './views/AboutMe.vue'
import Projets from './views/Projets.vue'
import Contact from '../src/views/Contact.vue'
import Footer from '../src/components/Footer.vue'
import Page404 from './views/Page404.vue'

export default {
  components: {
    Header,
    Home,
    AboutMe,
    Projets,
    Contact,
    Footer,
    Page404,
  },
};
</script>

<style scoped>
  @import url(./assets/main.css);
</style>
