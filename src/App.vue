<template>
  <Header />
  <main>
    <FormBuilder />
  </main>
  <Footer />
</template>

<script>

import FormBuilder from './components/FormBuilder.vue'
import Header from './components/sitewide/Header.vue'
import Footer from './components/sitewide/Footer.vue'


export default{
  name: "App",
  components: {
    FormBuilder,
    Header,
    Footer
  },
}

</script>

<style lang="scss">
@import url("./assets/scss/variables.scss");
main {
  max-width: 100%;
  display: flex;
  justify-content: center;

}
</style>