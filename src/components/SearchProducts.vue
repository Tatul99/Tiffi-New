<template>
  <div class="row justify-center page-title">
    {{ productsArr[0].title }}
  </div>
  <div v-if="productsArr.length">
    <div class="row justify-end">
      <div class="col-11 container">
        <div class="row justify-between">
          <div
            class="items col-md-3 col-xs-6"
            v-for="item in productsArr"
            :key="item.id"
          >
            <router-link :to="'/cloaths-info/' + item.id">
              <img
                @click="foo(item.id)"
                class="col-12 product-image"
                :src="url + '/' + item.image"
                alt="products image"
              />
              <div class="col-12 product-title">
                {{ item.title }}
              </div>
              <div class="col-12 product-price">${{ item.price }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HOST } from "../providers";
import { ref, onMounted, computed } from "vue";
let url = HOST;
const props = defineProps({
  productsArr: Array,
});
import { useStore } from "vuex";
let store = useStore();

function foo(id) {
  store.commit("module1/chengeId", id);
}
</script>

<style scoped>
.page-title {
  font-size: 60px;
  color: black;
  font-weight: bold;
  margin: 80px 0px 0px;
}

.product-title {
  font-size: 25px;
}
.product-price {
  font-size: 27px;
}
.product-image {
  width: 100%;
  height: 80%;
  object-fit: contain;
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
  .product-image {
    height: 233px;
  }
}
</style>
