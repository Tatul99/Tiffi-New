<template>
  <div class="col-8 responsive-menu-line" v-if="activePage == 0">
    <div class="menu row justify-around">
      <div
        @click="ChangeresponsiveMenuiBool(i, item)"
        class="col-12 col-sm-2 cursor-pointer text-weight-bold"
        v-for="(item, i) in menuTitles"
        :key="item"
      >
        <div class="row justify-center">
          <div class="col-12 items">
            <div class="row full-width">
              <div class="col-8">
                <div class="row justify-center">
                  <router-link :to="item.path">
                    <div
                      @click="
                        item.type !== undefined ? chengeType(item.type) : ''
                      "
                      :class="active === item.path ? 'active' : ''"
                    >
                      {{ item.name }}
                    </div></router-link
                  >
                </div>
              </div>
              <div class="col-4">
                <div class="row justify-center">
                  <q-icon
                    :class="
                      item.name == 'Главная' || item.name == 'О Нас'
                        ? 'cuycchtalIcon'
                        : ''
                    "
                    class="icons"
                    :name="
                      item.path === active
                        ? 'keyboard_arrow_down'
                        : 'keyboard_arrow_up'
                    "
                  ></q-icon>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 q-mb-md q-mt-md"
            v-if="
              item.path == active && item.path != '/' && item.path != '/Aboute'
            "
          >
            <div class="row justify-center">
              <div class="col-10">
                <div class="row justify-center">
                  <div class="col-8" v-for="title in subTitles" :key="title.id">
                    <div
                      class="row justify-center items-center sub-title"
                      @click="chengeactivepage(title)"
                    >
                      {{ title.title }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="mobileMenuArr !== null">
    <sub-tab-menu
      :name="activePageName"
      :title="activePageTitile"
      :items="mobileMenuArr"
      v-if="activePage == 1"
    />
  </div>
</template>

<script setup>
import SubTabMenu from "./SubTabMenu.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { HOST } from "../providers";
import { useRoute } from "vue-router";
let Route = useRoute();
let activePage = ref(0);
let activePageTitile = ref("");
let activePageName = ref("");
let active2 = ref(0);
let url = HOST;
let responsiveMenuiBool = ref(false);
let bool = ref(null);
let active = computed(() => Route.path);
let type = "";
let mobileMenuArr = ref([]);
onMounted(() => {
  MenuCategorisRequest();
  getType();
});
let subTitles = ref(null);
let menuTitles = [
  {
    id: 1,
    name: "Главная",
    path: "/",
  },
  {
    id: 2,
    name: "для Женщин",
    path: "/ForWoman",
    type: "for_women",
  },
  {
    id: 3,
    name: "для Мужчин",
    path: "/ForMan",
    type: "for_men",
  },
  {
    id: 4,
    name: "Новинки",
    path: "/New",
    type: "for_women",
  },
  {
    id: 5,
    name: "Скидки",
    path: "/Discounts",
    type: "for_men",
  },
  {
    id: 6,
    name: "О Нас",
    path: "/Aboute",
  },
];
function getType() {
  menuTitles.forEach((element) => {
    if (element.path === active.value) {
      type = element.type;
    }
  });
}
function chengeType(ElementType) {
  type = ElementType;
}
async function MenuCategorisRequest() {
  const response = await axios.get(url + "/api/app/categories");
  subTitles.value = response.data.data.items;
}
async function chengeactivepage(title) {
  const response = await axios.get(
    url + `/api/app/sub_categories/${title.id}/${type}`
  );
  mobileMenuArr.value = response.data.data.items;
  //   for (let i = 0; i < Subitems.length; i++) {
  //     if (id === Subitems[i].tabId) {
  //       console.log(Subitems[i]);
  //       obj = Subitems[i];
  //     }
  //   }
  activePage.value = 1;
  activePageTitile.value = title.title;
}
function ChangeresponsiveMenuiBool(i, item) {
  active2.value = i;
  if (item.path === Route.path) {
    activePageName.value = item.name;
  }

  if (item.type) {
    responsiveMenuiBool.value = true;
  } else {
    responsiveMenuiBool.value = false;
    active.value = i;
  }
}
</script>

<style scoped>
.responsive-menu-line {
  margin: 53px 0px 105px;
}
.active {
  font-size: 22px;
  font-weight: 900;
  /* position: relative; */
}
.items {
  display: flex;
  height: 50px;
  width: 80%;
  font-size: 22px;
  align-items: center;
  border-bottom: 1px solid;
  justify-content: center;
  position: relative;
}
.cuycchtalIcon {
  display: none;
}
.sub-title {
  font-size: 18px;
  height: 40px;
  border-bottom: 1px solid;
}
</style>
