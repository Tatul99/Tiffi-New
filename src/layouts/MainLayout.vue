<template>
  <Menu />

  <slot />
  <Footer />

  <a class="scroll cursor-pointer" @click="GoToTop()" v-if="scrollY === 500">
    <!-- <div class="icon"></div> -->
  </a>
</template>

<script setup>
import Menu from "./leyaout-component/menu.vue";
import Footer from "./leyaout-component/fotter.vue";
import { onMounted } from "vue";
console.log(Menu);
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

let scrollY = 0;
function handleScroll() {
  this.scrollY = window.scrollY;
  if (this.scrollY >= 50) {
    // console.log(12345);
  }
}
function GoToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
<style scoped>
.scroll {
  background-image: url("../../public/icons/btn-Up.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 38px;
  right: 38px;
}
</style>
