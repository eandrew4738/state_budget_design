<template>
  <transition v-if="show" name="fade">
    <div class="preloader">
      <div class="logo"></div>
      <div class="circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {
          this.show = false;
        }, 1000);
      }
    };
  },
})
export default class PageLoader extends Vue {
  show = true;
}
</script>