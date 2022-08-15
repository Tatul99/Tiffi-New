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
        <slider-main-component :obj="Clothing" :slideArr="ClothingArr" />
        <slider-main-component :obj="Shoes" :slideArr="ShoesArr" />
        <slider-main-component :obj="Bags" :slideArr="BagsArr" />
        <slider-main-component :obj="Bijouteri" :slideArr="BijouteriArr" />
      </div>
      <!-- <slider-main-component :obj="Dior" :slideArr="DiorArr" /> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { HOST } from "../providers";
import SliderMainComponent from "../components/slider-main-component.vue";

onMounted(() => {
  ForManRequest();
});

let url = HOST;
let Clothing = {};
let Shoes = {};
let ShoesArr = ref([]);
let Bags = {};
let BagsArr = ref([]);
let Bijouteri = {};
let RequestEnd = ref(1);
let BijouteriArr = ref([]);
let ClothingArr = ref([]);

async function ForManRequest() {
  const response = await axios.get(
    url + "/api/app/products/root-category-products/for_women"
  );
  let ForManPageInfo = response.data.data.items;
  for (let i = 0; i < ForManPageInfo.length; i++) {
    if (ForManPageInfo[i].category_title === "Одежда") {
      cloth(ForManPageInfo[i]);
    }
    if (ForManPageInfo[i].category_title === "Обувь") {
      shouse(ForManPageInfo[i]);
    }
    if (ForManPageInfo[i].category_title === "Сумки") {
      bags(ForManPageInfo[i]);
    }
    if (ForManPageInfo[i].category_title === "Аксессуары") {
      Accsesories(ForManPageInfo[i]);
    }
  }
  RequestEnd.value = 1;

  console.log(response.data.data.items);
  console.log(RequestEnd.value);
}

if (RequestEnd.value == 1) {
  console.log(1234);
}
console.log(5678);
function shouse(item) {
  //   console.log(item);
  Shoes.id = item.category_id;
  Shoes.title = item.category_title;

  ShoesArr.value = item.products;
  //   console.log(ClothingArr.value);
}
function bags(item) {
  //   console.log(item);
  Bags.id = item.category_id;
  Bags.title = item.category_title;

  BagsArr.value = item.products;
  //   console.log(ClothingArr.value);
}
function Accsesories(item) {
  //   console.log(item);
  Bijouteri.id = item.category_id;
  Bijouteri.title = item.category_title;

  BijouteriArr.value = item.products;
  //   console.log(ClothingArr.value);
}
function cloth(item) {
  //   console.log(item);
  Clothing.id = item.category_id;
  Clothing.title = item.category_title;

  ClothingArr.value = item.products;
  //   console.log(ClothingArr.value);
}
console.log(Clothing);
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
