<template>
  <div class="col-12">
    <div class="row justify-center">
      <div class="col-6 q-mt-xl q-mb-xl">
        <div class="row justify-center">
          <div class="big-Title">Новинки</div>
        </div>
      </div>
      <div v-if="ForWomenArr.length" class="col-12">
        <slider-main-component :obj="ForMan" :slideArr="ForManArr" />
        <slider-main-component :obj="ForWoman" :slideArr="ForWomenArr" />
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
    url + "/api/app/products/new-products/for_men"
  );
  ForManArr.value = response.data.data.items;
  RequestEnd.value = 1;
}

async function ForWomenRequest() {
  const response = await axios.get(
    url + "/api/app/products/new-products/for_women"
  );
  ForWomenArr.value = response.data.data.items;
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
