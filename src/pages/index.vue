<template>
  <div>
    <spring-colection />
  </div>
</template>

<script setup>
import SpringColection from "../indexComponent/SpringColection.vue";
</script>

<style scoped>
/* div {
  height: 130vh;
  width: 100vw;
  background: red;
} */
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
