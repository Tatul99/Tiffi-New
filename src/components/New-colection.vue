<template>
  <div class="col-12 main-colection">
    <div v-if="obj">
      <div class="row">
        <div class="title col-12" v-if="obj.text">
          {{ obj.text ? obj.text : "" }}
        </div>
        <div v-if="path !== '/cloaths-info/'" class="row seeMoreDiv">
          <div class="seeMore q-pr-md">Увидеть Больше</div>
          <img
            src="../../public/forMan/left-vector.svg"
            class="cursor-pointer seeMoreIcon"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 content">
    <div class="q-ml-xl sliderarancmargin row">
      <div
        class="col-12 col-md-10 content1"
        style="height: 700px; position: relative"
      >
        <vueper-slides
          class="no-shadow novinki-slide"
          :infinite="false"
          :bullets="false"
          :visible-slides="teqvoxSlide"
          :gap="4.3"
          :dragging-distance="70"
          :alwaysRefreshClones="true"
        >
          <template #arrow-left>
            <i class="icon icon-arrow-left icons" @click="active--" />
          </template>

          <template #arrow-right>
            <i class="icon icon-arrow-right" />
          </template>

          <vueper-slide
            v-for="(i, index) in arr"
            :key="i.id"
            class="items"
            :content="i.title"
            :summary="i.info"
            :active="i"
            :title="i.price.toString()"
            disable
            @click="log(url)"
            :image="url + '/' + i.image"
          >
            <template v-slot:content>
              <div
                class="vueperslide__content-wrapper"
                style="flex-direction: row"
              >
                <span class="text">{{
                  i.info.length < 50 ? i.info : i.info.slice(0, 42) + "..."
                }}</span>
                <span class="image-title">{{ i.title }}</span>
                <span class="prise">{{ i.price }}$</span>
                <img
                  v-if="index <= 1"
                  class="btn"
                  :src="url + '/' + i.image"
                  alt=""
                />
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </div>
  <!-- <div></div> -->
</template>
<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import axios from "axios";
import { ref } from "vue";
import { HOST } from "../providers";
import { onMounted, onUnmounted } from "@vue/runtime-core";
const props = defineProps({
  obj: String,
  arr: Array,
});

let teqvoxSlide = 3;
let url = HOST;
let arr = props.arr;
let width = document.documentElement.clientWidth;
let active = 1;
onMounted(() => {
  window.addEventListener("resize", getDimensions);
  if (window.innerWidth < 1041) teqvoxSlide = 2.2;
  if (window.innerWidth > 1040) teqvoxSlide = 3;
  if (window.innerWidth < 455 && arr.length > 9) teqvoxSlide = 3.9;

  if (window.innerWidth < 455 && arr.length <= 9) teqvoxSlide = 3.5;
});
onUnmounted(() => {
  window.removeEventListener("resize", getDimensions);
});

function getDimensions() {
  width = document.documentElement.clientWidth;

  if (window.innerWidth < 1041) teqvoxSlide = 2.2;
  if (window.innerWidth > 1025) teqvoxSlide = 3;
  if (window.innerWidth < 455 && arr.length > 9) teqvoxSlide = 3.9;

  if (window.innerWidth < 455 && arr.length <= 9) teqvoxSlide = 3.5;
}
</script>

<style scoped>
.main-colection {
  margin-top: 200px;
}
.items {
  /* height: 300px !important; */
  width: 372px;
  height: 468px;
  /* margin: 2% 1.6%; */
}
.content {
  margin-bottom: 200px;
}
.novinki-slide {
  z-index: 0;
}
.icons {
  width: 66px;
  height: 66px;
}
.active-slide {
  width: 634px !important;
  height: 583px !important;
  /* border: 5px solid red; */
}
.prise {
  display: none;
  font-size: 25px;
  font-weight: 500;
  position: absolute;
  right: 250px;
  bottom: -50px;
}
.text {
  display: none;
  width: 429px;
  text-align: left;
  position: absolute;
  bottom: -110px;
  font-size: 18px;
  color: #000000;
  left: 0;
}
.active-slide .prise {
  display: block;
}
.image-title {
  position: absolute;
  bottom: -50px;
  left: 0;
  font-size: 21px;
  color: #000000;
}
.active-slide .image-title {
  font-weight: 600;
}
.btn {
  position: absolute;
  bottom: -50px;
  right: -420px;
  width: 66px;
  height: 66px;
  display: none;
}
/* // .active-slide .text {
//   display: block;
// }
// .active-slide .btn {
//   display: block;
// } */

.first_slide_item {
  width: 100px !important;
}
.no-shadow {
  width: 100%;
}

.icons {
  width: 66px;
  height: 66px;
}
.arrow-left {
  width: 66px;
  height: 66px;
  position: absolute;
  bottom: 1px;
  right: 7.6%;
}
.arrow-right {
  width: 66px;
  height: 66px;
  position: absolute;
  bottom: 1px;
  right: -0.8%;
}
.title {
  font-size: 70px;
  font-weight: 700;
  margin-left: 80px;
}
.seeMore {
  font-size: 25px;
  text-decoration: none;
}
.seeMoreDiv {
  margin: 0px 0px 30px 80px;
}

@media all and (max-width: 1025px) {
  .items {
    /* //   height: 300px !important; */
    width: 330px;
    height: 468px;
    /* // margin: 2% 1.6%; */
  }
  .sliderarancmargin {
    margin: 0;
    height: 650px !important;
  }
  .image-title {
    font-size: 23px;
  }
}
@media all and (max-width: 1025px) {
  .items {
    width: 280px !important;
    height: 350px !important;
  }
  .vueperslide--active {
    width: 380px !important;
    height: 450px !important;
  }
  .image-title {
    font-size: 11px;
  }
  .prise {
    font-size: 16px;
  }
  .text {
    width: 157px;
    font-size: 12px;
    bottom: -100px;
  }
  /* // .sliderarancmargin {
  //   height: 500px;
  // } */
  .content1 {
    height: 500px !important;
  }
  .content {
    margin-bottom: 30px;
  }
  .title {
    font-size: 30px;
    margin-left: 10px;
  }
  .seeMore {
    font-size: 15px;
  }
  .seeMoreDiv {
    margin-left: 10px;
  }
  .seeMoreIcon {
    width: 23px;
    height: 15px;
  }
  .main-colection {
    margin-top: 100px;
  }
}
</style>
