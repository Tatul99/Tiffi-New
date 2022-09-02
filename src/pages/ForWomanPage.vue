<template>
  <div class="col-12">
    <div class="row justify-center q-mt-xl q-mb-xl">
      <div class="row q-mb-xl">
        <div
          class="row items-center mini-title-page text-weight-bolder q-pr-md"
        >
          для
        </div>
        <div class="col-4 title-page text-weight-bolder">Женщин</div>
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
                src="../../public/forWoman/forWoman.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12" v-if="ForWomenPageInfo.length">
        <slider-main-component
          v-for="item in ForWomenPageInfo"
          :key="item.id"
          :obj="{
            type: 'for_women',
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
import SliderMainComponent from "../components/slider-main-component.vue";

onMounted(() => {
  zapros();
});

let url = HOST;

let ardenverjacaczapros = 0;

let ForWomenPageInfo = ref([]);

async function zapros() {
  const response = await axios.get(
    url + "/api/app/products/root-category-products/for_women"
  );
  ForWomenPageInfo.value = response.data.data.items;

  ardenverjacaczapros = 1;
}
</script>

<style scoped>
.mini-title-page {
  font-size: 50px;
}
.title-page {
  font-size: 70px;
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
