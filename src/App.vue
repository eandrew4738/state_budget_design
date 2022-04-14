<template>
  <page-loader></page-loader>
  <the-header></the-header>
  <section style="padding-top: 102px">
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/layout/TheHeader.vue";
export default defineComponent({
  components: {
    TheHeader,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: $muted-color;
  overflow: auto;
}
</style>
