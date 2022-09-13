<template>
  <div class="col-12">
    <div class="row justify-end">
      <div class="col-11">
        <div class="row justify-between">
          <div class="item col-3" v-for="item in productsArr" :key="item.id">
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
let url = HOST;
const props = defineProps({
  productsArr: Array,
});
</script>

<style scoped>
.product-title {
  font-size: 25px;
}
.product-price {
  font-size: 27px;
}

.item {
  margin: 20px 40px 200px 0px;
}
@media all and (max-width: 450px) {
  .product-image {
    height: 233px;
  }
}
</style>
