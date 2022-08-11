<template>
  <Menu />

  <slot />
  <Footer />

  <a
    class="scroll cursor-pointer"
    @click="GoToTop()"
    v-if="cuycTalVerevTanoxButton"
  >
  </a>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Menu from "./leyaout-component/menu.vue";
import Footer from "./leyaout-component/fotter.vue";

// console.log(Menu.value);
// console.log(Footer.value);
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
let cuycTalVerevTanoxButton = ref(false);
let scrollY = 0;
function handleScroll() {
  scrollY = window.scrollY;
  if (scrollY >= 500) {
    cuycTalVerevTanoxButton.value = true;
  } else cuycTalVerevTanoxButton.value = false;
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
