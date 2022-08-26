<template>
  <div class="col-12 col-md-10 q-mt-xl main-slider">
    <div>
      <div class="col-12">
        <div class="row justify-end slider-title q-ml-md">
          <div class="col-11">
            <div class="row">
              <div
                v-if="obj.miniTitle"
                class="row items-center mini-title text-weight-bolder q-pr-md"
              >
                {{ obj.miniTitle }}
              </div>
              <div v-if="obj.title" class="col-6 title text-weight-bolder">
                {{ obj.title }}
              </div>
              <img :src="obj.img" alt="" />
            </div>
            <!-- <router-link @click="pushpath" to="/brand"> -->
            <router-link v-if="obj.path" :to="obj.path"
              ><div v-if="obj.path !== '/cloaths-info/'" class="row">
                <div class="seeMore q-pr-md">Увидеть Больше</div>
                <img
                  src="../../public/forMan/left-vector.svg"
                  class="cursor-pointer seeMoreIcon"
                  alt=""
                /></div
            ></router-link>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
      <div class="row justify-end">
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          infinite
          animated
          control-color="primary"
          padding
          ref="carousel"
          class="bg-grey-1 shadow-2 col-11 rounded-borders carusel"
        >
          <q-carousel-slide
            v-for="(item, i) in arr"
            :key="item"
            :name="i + 1"
            class="column no-wrap"
          >
            <div
              class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap slider-div"
            >
              <slider-component :arr="item" />
              <!-- <q-img
            v-for="info in item"
            :key="info"
            class="rounded-borders col-3 full-height"
            :src="info.image"
          ></q-img> -->
              <!-- <div class="text">{{ info.text }}</div>
          <div class="pr">{{ info.prise }}</div> -->
            </div>
          </q-carousel-slide>

          <template v-slot:control class="btns">
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                round
                push
                dense
                class="arrow-btn"
                :disable="activeBtn === 0"
                text-color="black"
                @click="$refs.carousel.previous(), activeBtn--"
              >
                <q-avatar size="66px">
                  <img
                    :src="
                      activeBtn === 0
                        ? './index/right.svg'
                        : './index/right-black.svg'
                    "
                  />
                </q-avatar>
              </q-btn>
              <q-btn
                push
                round
                :disable="activeBtn === arr.length - 1"
                text-color="black"
                @click="$refs.carousel.next(), activeBtn++"
              >
                <q-avatar size="66px">
                  <img
                    :src="
                      activeBtn === arr.length - 1
                        ? './index/left.svg'
                        : './index/left-black.svg'
                    "
                  />
                </q-avatar>
              </q-btn>
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import SliderComponent from "./slider-component.vue";
const props = defineProps({
  slideArr: Array,
  obj: Object,
});

let width = document.documentElement.clientWidth;
let slideToShow = 3;
let arr = ref([]);

let activeBtn = 0;
let slide = ref(1);

onMounted(() => {
  window.addEventListener("resize", getDimensions());
  ChengearrLength();
});
onUnmounted(() => {
  window.addEventListener("resize", getDimensions());
});
function getDimensions() {
  width = document.documentElement.clientWidth;

  if (window.innerWidth <= 1000) slideToShow = 2;
  if (window.innerWidth > 1000) slideToShow = 3;
}
function ChengearrLength() {
  let arr2 = [];

  if (props.slideArr.length) {
    for (let i = 0; i < props.slideArr.length; i++) {
      if (arr2.length == slideToShow) {
        arr.value.push(arr2);

        arr2 = [];
      }
      arr2.push(props.slideArr[i]);
    }
  }
  arr.value.push(arr2);
}
</script>

<style scoped>
.main-slider {
  margin-top: 400px;
}
.btns {
  position: absolute;
  bottom: 0px;
  right: 0;
}
.carusel {
  height: 950px !important;
}
.arrow-btn {
  margin-right: 60px !important;
}
.mini-title {
  font-size: 40px;
}
.title {
  font-size: 50px;
}
.seeMore {
  font-size: 25px;
  text-decoration: none;
}
/* .images {
  width: 30%;
  height: 30%;
} */
@media all and (max-width: 1024px) {
  .slider-div {
    justify-content: center;
  }
  .slider-title {
    margin-left: 60px;
  }
}
@media all and (max-width: 455px) {
  .mini-title {
    font-size: 25px;
  }
  .title {
    font-size: 35px;
  }
  .seeMore {
    font-size: 15px;
  }
  .slider-title {
    margin-left: 20px;
  }
  .seeMoreIcon {
    width: 23px;
    height: 15px;
  }

  .carusel {
    height: 600px !important;
  }
}
</style>
