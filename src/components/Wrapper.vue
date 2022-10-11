<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
// import styles from '../components/style/style.scss'

export default {
  name: 'Wrapper'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">

.wrapper {

  width: 100%;
  max-width: 1920px;
  min-width: 320px;
  font-family: 'Raleway', sans-serif;
  margin: 0 auto;
  background: $basic-wgrey;
}

</style>
