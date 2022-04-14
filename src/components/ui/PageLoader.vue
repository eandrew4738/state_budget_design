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
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {
          this.show = false;
        }, 1000);
      }
    };
  },
  // methods: {
  //   showToggle() {
  //     setTimeout(() => {
  //       this.show = false;
  //     }, 1000);
  //   },
  // },
});
</script>