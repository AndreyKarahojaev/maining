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

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  h2,h3,h4,h5,h6 {
    margin: 0;
  }
</style>
