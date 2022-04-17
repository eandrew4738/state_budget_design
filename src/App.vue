<template>
  <page-loader></page-loader>
  <the-header></the-header>
  <section style="padding-top: 102px">
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TheHeader from "./components/layout/TheHeader.vue";

@Options({
  components: {
    TheHeader,
  },
})
export default class App extends Vue {
  loading = true;
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $muted-color;
  overflow: auto;
}
</style>
