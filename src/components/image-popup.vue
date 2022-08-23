<template>
  <div class="main col-12">
    <div class="close">
      <q-icon
        name="close"
        @click="$emit('chengebool')"
        class="cursor-pointer"
      ></q-icon>
    </div>
    <div class="row content justify-center items-end">
      <div class="col-11 row photo-slider items-end">
        <div
          class="logo-controls full-height column justify-around col-1 gt-sm"
        >
          <img src="../../public/icons/logo-big.png" alt="" class="logo" />
          <div class="col-7 row items-center">
            <div class="row items-center">
              <div class="col full-height items-center justify-center">
                <div class="incriment" @click="chengeSizeIncriment(20)"></div>
                <div class="count">{{ count }}%</div>
                <div class="subtrac" @click="chengeSize(-20)"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="lt-md col-12">
          <div class="logo-mini-size col-12">
            <div class="row justify-center">
              <img
                src="../../public/icons/logo-big.png"
                alt=""
                class="logo-mini-size-image"
              />
            </div>
          </div>
          <div class="col-3 col-sm-10 col-md-6 slider-mini-size2">
            <div class="row justify-center">
              <q-carousel
                animated
                v-model="slide"
                navigation
                swipeable
                infinite
              >
                <q-carousel-slide
                  v-for="(item, i) in info.images"
                  :key="item.id"
                  :name="i"
                  :img-src="url + '/' + item"
                  :style="`background-size: ${chaps}% ${chaps}%;background-position:${width}% ${height}`"
                ></q-carousel-slide>
              </q-carousel>
            </div>
          </div>
          <div class="col-12 mini-size-chenge">
            <div class="row justify-center">
              <div class="col-4 col-sm-2">
                <div class="row justify-between">
                  <div class="incriment" @click="chengeSizeIncriment(20)"></div>
                  <div class="count-mini">{{ count }}%</div>
                  <div class="subtrac" @click="chengeSize(-20)"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-10 image-popup gt-sm">
          <div id="q-app" style="min-height: 70vh">
            <div class="q-pa-md">
              <q-carousel
                swipeable
                animated
                v-model="slide"
                thumbnails
                infinite
              >
                <q-carousel-slide
                  v-for="(item, i) in info.images"
                  @click="someMethod()"
                  :key="item"
                  :name="i + 1"
                  :img-src="url + '/' + item"
                  :style="`background-size: ${chaps}% ${chaps}%;background-position:${width}% ${height}`"
                ></q-carousel-slide>
              </q-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { HOST } from "../providers";
let url = HOST;
let count = ref(0);
// let slide = ref(1);
let chaps = ref(100);
let width = ref(70);

let height = ref(80);
const props = defineProps({
  info: Array,
  slide: Number,
});
function chengeSizeIncriment(num) {
  if (chaps.value < 200) {
    chaps.value += num;
    count.value += num;
  }
}
function chengeSize(num) {
  if (chaps.value > 100) {
    chaps.value += num;
    count.value += num;
  }
}
</script>

<style scoped>
.main {
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}
.close {
  position: fixed;
  top: 6%;
  right: 4%;
  font-size: 32px;
  font-weight: 600;
  /* transform: rotate(-0.05turn); */
}
.content {
  height: 70%;
}
.logo {
  width: 139px;
  height: 23px;
  margin-top: 70px;
  padding-right: 20px;
}
.photo-slider {
  height: 90vh;
}
.count {
  font-size: 25px;
  font-weight: 600;
  margin: 25px 0px;
}
.incriment {
  background-image: url("../../public/icons/plyus.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.subtrac {
  background-image: url("../../public/icons/minus.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.slider-mini-size {
  width: 824px;
  height: 1024px;
  display: flex;
  justify-content: center;
}
@media all and (max-width: 1024px) {
  .main {
    overflow: auto;
  }
  .photo-slider {
    justify-content: center;
  }
  .logo-mini-size-image {
    width: 192px;
    height: 46px;
  }
  .close {
    position: absolute;
    width: unset;
    height: unset;
    top: 100px;
    right: 100px;
    font-size: 27px;
  }
  .logo-mini-size {
    margin: 89px 0px 57px;
  }
  .slider-mini-size {
    margin-left: 50px;
  }
  .mini-size-chenge {
    margin: 53px 0px 70px;
  }
  .count-mini {
    font-size: 25px;
    font-weight: 600;
    /* transform: rotate(90deg); */
  }
  .incriment {
    margin: 0;
  }
  .subtrac {
    /* transform: rotate(90deg); */
    margin: 0;
  }
}
@media all and (max-width: 450px) {
  .logo-mini-size-image {
    width: 117px;
    height: 28px;
  }
  .close {
    top: 80px;
  }
  .slider-mini-size {
    width: unset;
    justify-content: flex-start;
  }
}
</style>
