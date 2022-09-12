<template>
  <div class="col-12">
    <div class="row justify-center">
      <div class="col-10 col-md-6">
        <div class="row justify-center big-title">
          <div>{{ clothsInfoArr.category }}-{{ clothsInfoArr.title }}</div>
        </div>
      </div>
      <div class="col-12 col-sm-11 main">
        <div class="row justify-center">
          <div class="col-12 col-md-6 lt-md slider-mini-size">
            <q-carousel animated v-model="slide" navigation swipeable infinite>
              <q-carousel-slide
                @click="chengeImagePage = true"
                v-for="(item, i) in images"
                :key="item"
                :name="i"
                :img-src="url + '/' + item"
              ></q-carousel-slide>
            </q-carousel>
          </div>
          <div class="col-12 col-md-7 gt-sm">
            <div class="row">
              <div
                v-for="(image, i) in images"
                :key="image"
                :class="{
                  'col-12': i === 0,
                }"
              >
                <img
                  @click="chengeImagePage = true"
                  :class="{
                    'image-1': i === 0,
                    'other-image': i > 0,
                    'image-left': i === 2 || i === 4,
                  }"
                  :src="url + '/' + image"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5">
            <cloaths-info-component :info="clothsInfoArr" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <image-popap
    v-if="chengeImagePage"
    :slide="+slide"
    :info="clothsInfoArr"
    @chengebool="chegeBool()"
  />
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { HOST } from "../providers";
import CloathsInfoComponent from "../components/cloaths-info-component.vue";
import ImagePopap from "../components/image-popup.vue";
let store = useStore();
let id = ref(store.state.module1.id);
let url = HOST;
let images = ref([]);
let slide = ref(1);
let clothsInfoArr = ref([]);
let chengeImagePage = ref(false);

onMounted(() => {
  DresInfoRequest();
});

function chegeBool() {
  chengeImagePage.value = false;
}
async function DresInfoRequest() {
  let response = await axios.get(url + `/api/app/products/info/${id.value}`);
  clothsInfoArr.value = response.data.data;

  images.value = clothsInfoArr.value.images;
}
</script>

<style scoped>
.big-title {
  font-size: 70px;
  font-weight: 600;
  margin: 95px 0px 79px;
}
.image-1 {
  width: 843px;
  height: 560px;
}
.other-image {
  width: 405px;
  height: 410px;
  margin: 12px 0px 12px;
  /* margin-left: 12px; */
}
.image-left {
  padding-left: 13px;
}
.main {
  margin-bottom: 500px;
}
.slider-mini-size {
  width: 824px;
  height: 817px;
}
@media all and (max-width: 455px) {
  .slider-mini-size {
    display: flex;
    justify-content: center;
    height: 450px;
  }
  .big-title {
    font-size: 35px;
  }
}
</style>
