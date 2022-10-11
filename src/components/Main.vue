<template>
  <div class="main">
    <Prewiev />
    <Prewievtab />
    <Edge />
    <Calc />
    <Garant />
    <Faq />
    <Contacts />
  </div>
</template>

<script>
import Prewiev from "./pages/Prewiev.vue";
import Prewievtab from "./pages/Prewievtab.vue";
import Edge from "./pages/Edge.vue";
import Calc from "./pages/Calc.vue";
import Garant from "./pages/Garant.vue";
import Faq from "./pages/Faq.vue";
import Contacts from "./pages/Contacts.vue";

export default {
  name: "Main",
  components: {
    Prewiev,
    Prewievtab,
    Edge,
    Calc,
    Garant,
    Faq,
    Contacts,
  },
};
</script>

<style lang="scss" scoped>
  .main {
    position: relative;
    min-height: 100%;
    max-width: 1920px;
  }

  @media screen and (min-width: 380px) {

  }

  @media screen and (min-width: 480px) {

  }
  @media screen and (min-width: 680px) {

  }

</style>
