<template>
  <div class="col-12">
    <div class="row justify-center q-mt-xl q-mb-xl">
      <div class="row q-mb-xl">
        <div
          class="row items-center mini-title-page text-weight-bolder q-pr-md"
        >
          для
        </div>
        <div class="col-4 title-page text-weight-bolder">Мужчин</div>
      </div>
      <div class="video col-12">
        <div class="row justify-center">
          <div class="col-10">
            <div class="row justify-center">
              <video
                width="1640px"
                height="706px"
                class="video"
                style="object-fit: fill"
                autoplay
                loop
                muted
                src="../../public/forMan/forMan.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12" v-if="RequestEnd === 1">
        <slider-main-component
          v-for="item in ForManPageInfo"
          :key="item.id"
          :obj="{
            type: 'for_men',
            id: item.category_id,
            title: item.category_title,
          }"
          :slideArr="item.products"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { HOST } from "../providers";
import { useRoute } from "vue-router";
import SliderMainComponent from "../components/slider-main-component.vue";
let route = useRoute();

onMounted(() => {
  ForManRequest();
});

let url = HOST;

let ForManPageInfo = ref([]);
let RequestEnd = ref(1);

async function ForManRequest() {
  const response = await axios.get(
    url + "/api/app/products/root-category-products/for_men"
  );
  ForManPageInfo.value = response.data.data.items;

  RequestEnd.value = 1;
}
</script>

<style scoped>
.mini-title-page {
  font-size: 50px;
}
.title-page {
  font-size: 70px;
}
@media all and (max-width: 1024px) {
  /* .video {
    width: 874px;
    height: 709px;
  } */
}
@media all and (max-width: 455px) {
  .mini-title-page {
    font-size: 25px;
  }
  .title-page {
    font-size: 35px;
  }
  .video {
    width: 338px;
    height: 300px;
  }
}
</style>
