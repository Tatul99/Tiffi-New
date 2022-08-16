<template>
  <div class="col-12">
    <div class="row justify-center">
      <div class="col-6 q-mt-xl q-mb-xl">
        <div class="row justify-center">
          <div class="big-Title">Новинки</div>
        </div>
      </div>
      <div class="col-12">
        <div v-if="RequestEnd === 1">
          <new-colection :arr="NewColectionArr" />
        </div>
        <!-- <new-colection :arr="array" :obj="obj" /> -->
        <!-- <slider-main-component :obj="ForMan" :slideArr="ForManArr" />
        <slider-main-component :obj="ForWoman" :slideArr="ForWomanArr" />
        <slider-main-component :obj="Shoes" :slideArr="ShoesArr" />
        <slider-main-component
          :obj="BagsAccessories"
          :slideArr="BagsAccessoriesArr"
        /> -->
        <!-- <slider-main-component :obj="Dior" :slideArr="DiorArr" /> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import NewColection from "../components/New-colection.vue";
import SliderMainComponent from "../components/slider-main-component.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { HOST } from "../providers";
let url = HOST;
let RequestEnd = ref(0);
const NewColectionTextObject = { text: "" };
onMounted(() => {
  RequestforNewColection();
});
let NewColectionArr = ref([]);

async function RequestforNewColection() {
  const response = await axios.get(url + "/api/app/news/home");

  NewColectionArr.value = response.data.data.items;
  RequestEnd.value = 1;
}
</script>

<style scoped>
.big-Title {
  font-size: 70px;
  font-weight: 600;
}
@media all and (max-width: 455px) {
  .big-Title {
    font-size: 35px;
  }
}
</style>
