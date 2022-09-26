<template>
  <div class="main-div">
    <router-link to="/categories-page">
      <div
        v-for="(item, i) in arr"
        @click="
          change(i, item.id, item.children),
            chengCategoriesPageType(categoriesId, item.title)
        "
        :key="item.id"
        class="title"
      >
        <div v-if="item.title" class="row items-center">
          <div :class="i === active ? 'active' : ''">{{ item.title }}</div>
          <q-icon
            :name="i === active ? 'keyboard_arrow_right' : 'keyboard_arrow_up'"
          ></q-icon>
        </div>
      </div>
    </router-link>
  </div>
  <brends-tab :arr="BrendsArr" />
</template>

<script setup>
import axios from "axios";
import { useStore } from "vuex";
import BrendsTab from "./BrendsTab.vue";
import { ref, onMounted, reactive, computed, watch } from "vue";
import { HOST } from "../providers";

let arr = ref([]);
let BrendsArr = ref([]);
let store = useStore();
let active = ref(0);
let categoriesId = computed(() => store.state.module1.categoriesId);
let type = computed(() => store.state.module1.type);
let active2 = computed(() => store.state.module2.active);

watch(
  () => categoriesId.value,
  (categoriesId) => {
    SubCategoriesRequest();
  }
);

onMounted(() => {
  if (active2.value === 0) {
    SubCategoriesRequest();
  }
});
let url = HOST;
watch(
  () => type.value,
  (newType) => {
    if (newType !== "" || newType !== undefined) {
      SubCategoriesRequest();
    }
  }
);
async function SubCategoriesRequest() {
  const response = await axios.get(
    url + `/api/app/sub_categories/${categoriesId.value}/${type.value}`
  );

  arr.value = response.data.data.items;
}
function chengCategoriesPageType(id, title) {
  store.commit("module1/chengCategoriesPageType", [
    type.value,
    id,
    title,
    "products",
  ]);
}
function change(i, id, children) {
  active.value = i;
  BrendsArr.value = children;
}
</script>

<style scoped>
.main-div {
  margin-left: 135px;

  max-height: 400px;
  overflow: auto;
}
.title {
  height: 50px;
}
.active {
  font-size: 25px;
  font-weight: bold;
}
@media all and (max-width: 1024px) {
  .main-div {
    margin-left: 80px;
  }
}
</style>
