<template>
  <div class="col-12">
    <div class="row justify-center">
      <div class="col-4">
        <div class="row title justify-center">Скидки</div>
      </div>
      <div v-if="ForWomenArr.length" class="col-12 col-md-10">
        <slider-main-component :obj="ForWoman" :slideArr="ForWomenArr" />
        <slider-main-component :obj="ForMan" :slideArr="ForManArr" />
        <!-- <slider-main-component :obj="Shoes" :slideArr="ShoesArr" /> -->
        <!-- <slider-main-component :obj="Dior" :slideArr="DiorArr" /> -->
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
  miniTitle: "для ",
  title: " Мужчин",
  path: "/ForMan",
  id: 1,
};
let ForWoman = {
  miniTitle: "для ",
  title: "Женщин",
  path: "/ForWoman",
  id: 2,
};

onMounted(() => {
  ForMenRequest();
  ForWomenRequest();
});
console.log(RequestEnd.value);
if (RequestEnd.value == 1) {
  console.log(1234);
}
async function ForMenRequest() {
  const response = await axios.get(
    url + "/api/app/products/discounted-products/for_men"
  );
  ForManArr.value = response.data.data.items;
  RequestEnd.value = 1;
  console.log(RequestEnd.value);
}

async function ForWomenRequest() {
  const response = await axios.get(
    url + "/api/app/products/discounted-products/for_women"
  );
  ForWomenArr.value = response.data.data.items;
  RequestEnd.value = 1;
  console.log(ForWomenArr.value);
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
