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
      <slider-main-component :obj="ForMan" :slideArr="ForManArr" />
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

let url = HOST;
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
  zapros();
  zaprosforNewColection();
  zaprosForManComponent();
  zaprosForWomencomponent();
});

async function zaprosForManComponent() {
  const response = await axios.get(url + "/api/app/products/for_men");
  ForManArr.value = response.data.data.items;
}
async function zaprosForWomencomponent() {
  const response = await axios.get(url + "/api/app/products/for_women");
  ForWomenArr.value = response.data.data.items;
}
async function zapros() {
  const response = await axios.get(url + "/api/app/collection");

  compilationArr.value = response.data.data.items;
}
async function zaprosforNewColection() {
  const response = await axios.get(url + "/api/app/news/home");

  NewColectionArr.value = response.data.data.items;
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
