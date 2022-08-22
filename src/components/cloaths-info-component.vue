<template>
  <div class="col-12 main">
    <div class="title-mini row items-start">
      {{ info.category }}-{{ info.title }}
    </div>
    <div class="row items-center">
      <div class="color">Цвета</div>
      <div class="col-4 col-md-2">
        <div class="row justify-around">
          <div
            @click="active = 0"
            :class="active === 0 ? 'active' : ''"
            class="color1 colors bg-dark"
          ></div>
          <div
            @click="active = 1"
            :class="active === 1 ? 'active' : ''"
            class="color2 colors bg-brown"
          ></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="text-title">ОПИСАНИЕ</div>
      <div class="text">
       
        {{ info.info }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let active = ref(0);
const props = defineProps({
  info: Array,
});
</script>

<style scoped>
.main {
  margin-left: 60px;
}
.title-mini {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
}
.container {
  margin-top: 40px;
  background: #ececee 0% 0%;
  padding: 25px 35px 40px 38px;
}
.text-title {
  font-size: 25px;
  letter-spacing: 3px;
  margin-bottom: 30px;
  font-weight: 600;
}
.color {
  font-size: 28px;
  font-weight: 600;
}
.colors {
  width: 33px;
  height: 22px;
}
.active {
  position: relative;
}
.active:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: black;
  bottom: -7px;
  left: 0px;
}
.text {
  font-size: 23px;
  letter-spacing: 2px;
  font-weight: 500;
}
@media all and (max-width: 1024px) {
  .container {
    width: 716px;
    height: 585px;
  }
}
@media all and (max-width: 450px) {
  .title-mini {
    font-size: 22px;
  }
  .color {
    font-size: 22px;
  }
  .container {
    width: 320px;
    height: 413px;
    overflow: hidden;
    padding: 20px 19px 23px;
  }
  .text-title {
    font-size: 20px;
  }
  .text {
    font-size: 17px;
  }
  .main {
    margin-left: 35px;
  }
}
</style>
