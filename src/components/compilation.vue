<template>
  <!-- <div v-for="item in filtrArr" :key="item.id">
    <slider-component :arr="item" />
  </div> -->

  <div class="col-11 main-slider">
    <div class="row justify-center">
      <div class="col-11">
        <div class="row justify-end items-center">
          <div class="col-11 col-md-8">
            <div class="row justify-between">
              <div class="big-title row items-center">Подборка</div>
              <div class="time row items-center col-4">
                <div class="day col-8 col-md-6">{{ today }}/</div>
                <div class="mounth col-4 col-md-6">{{ mun }}</div>
              </div>
            </div>
          </div>
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
          v-for="(item, i) in filtrArr"
          :key="`item${item.id}`"
          :name="i + 1"
          class="column no-wrap"
        >
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap slider-div"
          >
            <slider-component :arr="item" />
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
              :disable="activeBtn === filtrArr.length - 1"
              text-color="black"
              @click="$refs.carousel.next(), activeBtn++"
            >
              <q-avatar size="66px">
                <img
                  :src="
                    activeBtn === filtrArr.length - 1
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
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { date } from "quasar";
import SliderComponent from "./slider-component.vue";
const props = defineProps({
  slideArr: Object,
  obj: Object,
});
let slideToShow = 4;
let width = document.documentElement.clientWidth;
onMounted(() => {
  // console.log(props.slideArr);
  window.addEventListener("resize", getDimensions());
  if (props.slideArr.length) {
    foo();
  }
});
onUnmounted(() => {
  window.addEventListener("resize", getDimensions());
});
function getDimensions() {
  width = document.documentElement.clientWidth;

  if (window.innerWidth < 1041) slideToShow = 3;
  if (window.innerWidth > 1040) slideToShow = 4;
  if (window.innerWidth < 455) slideToShow = 2;
  // if (window.innerWidth < 1040) this.slideToShow = 3;
  // else if (window.innerWidth > 1040) this.slideToShow = 4;

  // if (this.width + 15 <= 500) this.slideToShow = 1;
}
let filtrArr = ref([]);

function foo() {
  let arr2 = [];

  if (props.slideArr.length) {
    for (let i = 0; i < props.slideArr.length; i++) {
      if (arr2.length == slideToShow) {
        filtrArr.value.push(arr2);

        arr2 = [];
      }
      arr2.push(props.slideArr[i]);
    }
  }
  filtrArr.value.push(arr2);
}

const timeStamp = Date.now();
const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD");
let activeBtn = 0;
let slide = ref(1);
const mounths = {
  1: "янв",
  2: "фев",
  3: "мар",
  4: "апр",
  5: "мая",
  6: " июня",
  7: "июля",
  8: " авг",
  9: " сен",
  10: "окт",
  11: "ноя",
  12: "дек",
};
let today = parseInt(formattedString.slice(8));
let mun = mounths[parseInt(formattedString.slice(5, 7))];

let path = "";
</script>

<style scoped>
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
.day {
  font-size: 90px;
  font-weight: bold;
}
.mounth {
  font-size: 35px;
}
.big-title {
  font-size: 70px;
  font-weight: bold;
}
/* .images {
  width: 30%;
  height: 30%;
} */

@media all and (max-width: 1024px) {
  .slider-div {
    justify-content: center;
  }
  .prise {
    font-size: 25px;
  }
  .text {
    font-size: 24px;
  }
}
@media all and (max-width: 450px) {
  .big-title {
    font-size: 35px;
    margin-bottom: 20px;
  }
  .day {
    font-size: 30px;
  }
  .mounth {
    font-size: 12px;
  }
  .main-slider {
    height: 600px !important;
  }
  .carusel {
    height: 450px !important;
  }
  .slider-div {
    align-items: flex-start;
  }
  /* img {
    width: 48px;
    height: 48px;
  } */
}
@media all and (max-width: 360px) {
  .big-title {
    font-size: 25px;
  }
  .day {
    font-size: 25px;
  }
}
</style>
