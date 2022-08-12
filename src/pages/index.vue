<template>
  <div>
    <spring-colection />
    <div v-if="compilationArr.length">
      <compilation :slideArr="compilationArr" :obj="obj2" />
    </div>
  </div>
</template>

<script setup>
import SpringColection from "../indexComponent/SpringColection.vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";
import axios from "axios";
import { HOST } from "../providers";
import Compilation from "../components/compilation.vue";
import { onMounted } from "@vue/runtime-core";
let store = useStore();
const obj2 = { text: "Подборка" };
let compilationArr = ref([]);
// console.log(HOST);
let url = HOST;
onMounted(() => {
  zapros();
});

// console.log(store);
async function zapros() {
  const response = await axios.get(url + "/api/app/collection");
  // console.log(response.data.data);
  compilationArr.value = response.data.data.items;
  // console.log(compilationArr.value);
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
