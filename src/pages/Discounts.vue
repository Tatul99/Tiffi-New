<template>
  <div class="col-12">
    <div class="row justify-center">
      <div class="col-4">
        <div class="row title justify-center">Скидки</div>
      </div>
      <div class="col-12 col-md-10">
        <!-- <slider-main-component :obj="ForWoman" :slideArr="ForWomanArr" />
        <slider-main-component :obj="ForMan" :slideArr="ForManArr" />
        <slider-main-component :obj="Shoes" :slideArr="ShoesArr" />
        <slider-main-component :obj="Dior" :slideArr="DiorArr" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { HOST } from "../providers";
</script>

<style scoped>
.title {
  margin-top: 100px;
  margin-bottom: 67px;
  font-size: 70px;
  font-weight: 600;
}
@media all and (max-width: 455px) {
  .title {
    font-size: 35px;
  }
}
</style>
