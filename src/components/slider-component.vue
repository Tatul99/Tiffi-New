<template>
  <div
    class="col-12 col-sm-11 col-md-12 row justify-between items-center line-div2"
  >
    <div
      class="line-div cursor-pointer"
      v-for="img in arr"
      :key="img.id"
      :style="`width:${100 / arr.length - 1}%;height:522px`"
    >
      <router-link :to="'/cloaths-info/' + img.id">
        <q-img
          @click="foo(img.id, img.type ? img.type : type)"
          class="rounded-borders col-1 col-md-2 row images items-end"
          :src="url + '/' + img.image"
        >
        </q-img>
      </router-link>
      <div class="text text-weight-bolder">{{ img.title }}</div>
      <div class="prise">${{ img.price }}</div>
      <div class="Discount" v-if="img.discount_percent">
        -{{ img.discount_percent }}%
      </div>
    </div>
  </div>
</template>

<script setup>
import { HOST } from "../providers";
import { useStore } from "vuex";
let store = useStore();

const url = HOST;

const props = defineProps({
  arr: Object,
  type: String,
});
function foo(id, type) {
  console.log(type);
  store.commit("module1/chengeId", [id, type]);
}
</script>

<style scoped>
.line-div {
  position: relative;
}
.text {
  font-size: 25px;
  margin-top: 15px;
}
.prise {
  font-size: 27px;
  margin-top: 10px;
}
.images {
  width: 100%;
  height: 100%;
}
.Discount {
  width: 64px;
  height: 40px;
  position: absolute;
  top: 22px;
  left: 22px;
  background-color: #000000;
  padding: 4px 7px 6px 6px;
  color: #fff;
  font-size: 20px;
  font-family: "Prompt", sans-serif;
  font-weight: 100;
}
@media all and (max-width: 1024px) {
  /* .line-div2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  } */
  .prise {
    font-size: 25px;
  }
  .text {
    font-size: 24px;
  }
}
@media all and (max-width: 450px) {
  .text {
    font-size: 15px;
  }
  .prise {
    font-size: 16px;
  }
  .line-div {
    width: 45% !important;
    height: 263px !important;
  }
}
</style>
