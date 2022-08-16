<template>
  <div>
    <spring-colection />

    <div v-if="compilationArr.length">
      <compilation :slideArr="compilationArr" :obj="obj2" />
    </div>
    <div v-if="NewColectionArr.length">
      <new-colection :obj="NewColectionTextObject" :arr="NewColectionArr" />
    </div>
    <div v-if="compilationArr.length">
      <!-- <slider-main-component :obj="ForMan" :slideArr="compilationArr" /> -->
      <slider-main-component :obj="ForMan" :slideArr="compilationArr" />
    </div>
    <div v-if="ForWomenArr.length">
      <slider-main-component :obj="ForWoman" :slideArr="ForWomenArr" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed, reactive, onMounted } from "vue";
import axios from "axios";
import { HOST } from "../providers";
import Compilation from "../components/compilation.vue";
import SpringColection from "../indexComponent/SpringColection.vue";
import NewColection from "../components/New-colection.vue";
import SliderMainComponent from "../components/slider-main-component.vue";
let store = useStore();
const obj2 = { text: "Подборка" };
const NewColectionTextObject = { text: "Новая коллекция" };
let NewColectionArr = ref([]);
let compilationArr = ref([]);
let ForManArr = ref([]);
let ForWomenArr = ref([]);
// console.log(HOST);
let url = HOST;
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
  zapros();
  zaprosforNewColection();
  zaprosForManComponent();
  zaprosForWomencomponent();
});

// console.log(store);
async function zaprosForManComponent() {
  const response = await axios.get(url + "/api/app/products/for_men");
  ForManArr.value = response.data.data.items;
  console.log(ForManArr.value);
}
async function zaprosForWomencomponent() {
  const response = await axios.get(url + "/api/app/products/for_women");
  ForWomenArr.value = response.data.data.items;
  console.log(ForWomenArr.value);
}
async function zapros() {
  const response = await axios.get(url + "/api/app/collection");
  // console.log(response.data.data);
  compilationArr.value = response.data.data.items;
  console.log(compilationArr.value);
}
async function zaprosforNewColection() {
  const response = await axios.get(url + "/api/app/news/home");

  NewColectionArr.value = response.data.data.items;
}
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
