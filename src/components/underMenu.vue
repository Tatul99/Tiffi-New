<template>
  <div class="main col-12">
    <div class="row justify-center">
      <div class="col-12">
        <div class="line"></div>
        <div class="row justify-center">
          <div class="col-10">
            <div class="row justify-start">
              <div class="column col-3">
                <router-link to="/categories-page">
                  <div
                    class="items row justify-between"
                    v-for="(item, i) in menuItems"
                    :key="item.id"
                    @mouseover="chengeInfo(item.id, i)"
                    @click="chengCategoriesPageType(item.id, item.title)"
                    :class="i === active ? 'active' : ''"
                  >
                    <div>{{ item.title }}</div>
                    <q-icon
                      :name="
                        i === active
                          ? 'keyboard_arrow_right'
                          : 'keyboard_arrow_up'
                      "
                    ></q-icon>
                  </div>
                </router-link>
              </div>
              <sub-tab class="col-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubTab from "./SubTab.vue";
import axios from "axios";
import { useStore } from "vuex";
import { ref, onMounted, reactive, computed } from "vue";
import { HOST } from "../providers";
let url = HOST;
let store = useStore();
let tabId = null;

let menuItems = ref([]);
let type = computed(() => store.state.module1.type);
let active = computed(() => store.state.module2.active);

onMounted(() => {
  MenuCategorisRequest();
  active.value = 0;
});
function chengeInfo(id, i) {
  store.commit("module1/changeCategoriesId", [id, i]);
  store.commit("module2/changeCategoriesactive", [id, i]);
}
async function MenuCategorisRequest() {
  const response = await axios.get(url + "/api/app/categories");
  menuItems.value = response.data.data.items;
}
function chengCategoriesPageType(id, title) {
  store.commit("module1/chengCategoriesPageType", [type.value, id, title]);
}
</script>

<style scoped>
.main {
  position: absolute;
  top: 82px;
  left: 0;
  height: 700px;
  max-height: 800px;
  overflow: auto;
  width: 100%;
  background-color: #fff;
  z-index: 100;
}
.line {
  margin: 19px 0px 119px;
  width: 100%;
  height: 2px;
  background-color: #000000;
}
.items {
  width: 253px;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #9d9d9d;
  margin-bottom: 50px;
}
.childs {
  height: 300px;
  width: 300px;
  background-color: aqua;
}
.active {
  font-size: 35px;
  font-weight: bold;
}
@media all and (max-width: 1024px) {
  .main {
    top: 320px;
    min-height: 200px;
    position: unset;
  }
  .line {
    display: none;
  }
  .items {
    width: 230px;
  }
  .active {
    font-size: 30px;
  }
}
</style>
