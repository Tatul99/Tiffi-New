<template>
  <div>
    <div class="row justify-center">
      <div class="page-title">{{ Title }}</div>

      <div v-if="!subCategory" class="col-12">
        <slider-main-component
          v-for="item in requestAnswer"
          :key="item.id"
          :obj="{
            type: type,
            id: item.category_id,
            title: item.category_title,
            subCategory: 'product',
          }"
          :slideArr="item.products"
        />
      </div>
      <div v-if="subCategory">
        <categories-items :productsArr="productsArr" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoriesItems from "../components/categories-items.vue";
import { HOST } from "../providers";
import axios from "axios";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, onMounted, computed, watch, onUpdated } from "vue";
import sliderMainComponent from "../components/slider-main-component.vue";
let url = HOST;
let store = useStore();
let route = useRoute();
let RequestEnd = ref(0);
let requestAnswer = ref([]);
let subCategory = computed(() => store.state.module1.subCategory);
let productsArr = computed(() => store.state.module1.productsArr);
let type = computed(() => store.state.module1.categoriesType);
let parentId = computed(() => store.state.module1.categoriesParentId);
let Title = computed(() => store.state.module1.categoriesTitle);

watch(
  () => type.value,
  () => {
    // console.log(type.value, parentId.value);
    productCategories(type.value, parentId.value);
    if (requestAnswer.value.length) {
      FilterCategores(requestAnswer.value);
    }
  }
);
onMounted(() => {
  productCategories(type.value, parentId.value);
});
watch(
  () => parentId.value,
  () => {
    // console.log(type.value, parentId.value);
    productCategories(type.value, parentId.value);
    if (requestAnswer.value.length) {
      FilterCategores(requestAnswer.value);
    }
  }
);
watch(
  () => Title.value,
  (title) => {
    // console.log(type.value, parentId.value);
    productCategories(type.value, parentId.value);
    if (requestAnswer.value.length) {
      FilterCategores(requestAnswer.value);
    }
  }
);

async function productCategories(type, parentId) {
  console.log(1234);
  const response = await axios.get(
    url + `/api/app/products/sub-category-products/${parentId}/${type}`
  );
  requestAnswer.value = response.data.data.items;

  RequestEnd.value = 1;
  FilterCategores(requestAnswer.value);
}
function foo(id) {
  store.commit("module1/chengeId", id);
}
function FilterCategores(arr, title) {
  arr.forEach((el) => {
    if (title === el.category_title) {
      productsArr.value = el.products;
    }
    if (Title.value === el.category_title) {
      store.commit("module1/changeProductsArr", el.products);
    }
  });
}
</script>

<style scoped>
.page-title {
  font-size: 60px;
  font-weight: 900;
  margin: 100px 0px 50px 0px;
}
.product-title {
  font-size: 25px;
}

.items {
  width: 30%;
  height: 522px;
  margin: 200px 37px 0px 0px;
}

@media all and (max-width: 450px) {
  .items {
    width: 42%;
    margin: 100px 20px 0px 0px;
    height: 350px;
  }
}
</style>
