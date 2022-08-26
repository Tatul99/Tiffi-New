<template>
  <div v-if="openPage === 1">
    <div v-if="SearchProductsArr.length">
      <search-products :productsArr="SearchProductsArr" />
    </div>
    <div v-if="!SearchProductsArr.length">
      <div class="col-12">
        <div class="eror row justify-center items-center">
          <div class="row justify-center">
            <div class="col-9 col-sm-7">
              <div class="error-window">
                <div class="col-12">
                  <div class="row justify-center">
                    <div>
                      <img src="/icons/close.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="row error-title justify-center">
                    Страница не найдена
                  </div>
                </div>
                <div class="col-12">
                  <div class="row eror-text justify-center">
                    Давно выяснено, что при оценке дизайна и композиции читаемый
                    текст.
                  </div>
                </div>
                <div class="col-12">
                  <div class="row justify-center">
                    <router-link to="/"
                      ><q-btn class="q-mt-md" unelevated rounded color="black"
                        ><p>Вернуться домой</p></q-btn
                      ></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchProducts from "../components/SearchProducts.vue";
import { ref, onMounted, computed, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { HOST } from "../providers";
let url = HOST;

let store = useStore();
let SearchProductsArr = ref([]);
let openPage = ref(0);
let SearchedText = computed(() => store.state.module1.SearchedText);
onMounted(() => {
  console.log(SearchedText.value);
  SearchProductRequest(SearchedText.value);
});
watch(
  () => SearchedText.value,
  (text) => {
    console.log(text);
    SearchProductRequest(text);
  }
);
async function SearchProductRequest(name) {
  let response = await axios.get(url + `/api/app/search?query=${name}`);

  SearchProductsArr.value = response.data.data.items;
  openPage.value = 1;
  console.log(SearchProductsArr.value);
}
</script>

<style scoped>
.eror {
  height: 100vh;
}

.error-window {
  padding: 40px 85px;
  background: #ececec;
  color: black;
}
.error-title {
  font-size: 35px;
  font-weight: 800;
  margin: 14px 0px;
}
.eror-text {
  font-size: 23px;
  font-weight: 600;
}
p {
  padding: 7px 50px 5px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin: 0 !important;
}

@media all and (max-width: 450px) {
  .page-title {
    font-size: 60px;
  }
  .eror-text {
    font-size: 17px;
  }
  .error-title {
    font-size: 25px;
  }
  p {
    padding: 7px 20px 5px;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    margin: 0 !important;
  }
  .error-window {
    padding: 20px 15px;
  }
}
</style>
