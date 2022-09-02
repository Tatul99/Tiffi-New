<template>
  <div class="col-12">
    <div class="row justify-center">
      <div class="col-4">
        <div class="row title justify-center">Скидки</div>
      </div>
      <div v-if="ForWomenArr.length" class="col-12 col-md-10">
        <slider-main-component :obj="ForWoman" :slideArr="ForWomenArr" />
        <slider-main-component :obj="ForMan" :slideArr="ForManArr" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { HOST } from "../providers";
import SliderMainComponent from "../components/slider-main-component.vue";
let url = HOST;
let ForManArr = ref([]);
let ForWomenArr = ref([]);
let RequestEnd = ref(0);
let ForMan = {
  type: "for_men",
  miniTitle: "для ",
  title: " Мужчин",
  path: "/ForMan",
  id: 1,
};
let ForWoman = {
  type: "for_women",
  miniTitle: "для ",
  title: "Женщин",
  path: "/ForWoman",
  id: 2,
};

onMounted(() => {
  ForMenRequest();
  ForWomenRequest();
});

async function ForMenRequest() {
  const response = await axios.get(
    url + "/api/app/products/discounted-products/for_men"
  );
  ForManArr.value = response.data.data.items;
  RequestEnd.value = 1;
}

async function ForWomenRequest() {
  const response = await axios.get(
    url + "/api/app/products/discounted-products/for_women"
  );
  ForWomenArr.value = response.data.data.items;
  RequestEnd.value = 1;
}
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
