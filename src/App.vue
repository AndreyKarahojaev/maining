<template>
  <Wrapper>
    <Header />
    <Main />
    <Footer />
  </Wrapper>
</template>

<script>
import Wrapper from './components/Wrapper.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Wrapper,
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
