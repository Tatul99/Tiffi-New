<template>
  <div class="col-8 responsive-menu-line lt-sm" v-if="activePage == 0">
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
                        item.type !== undefined
                          ? chengeType(item.type, item.path)
                          : ''
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
                    <router-link to="/categories-page"
                      ><div
                        class="row justify-between items-center sub-title"
                        @click="
                          chengeactivepage(title),
                            chengCategoriesPageType(type, title.id, title.title)
                        "
                      >
                        <div>{{ title.title }}</div>
                        <q-icon
                          :class="
                            item.name == 'Главная' || item.name == 'О Нас'
                              ? 'cuycchtalIcon'
                              : ''
                          "
                          class="icons"
                          :name="'keyboard_arrow_up'"
                        ></q-icon></div
                    ></router-link>
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
import { ref, onMounted, computed, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { HOST } from "../providers";
import { useRoute } from "vue-router";
let Route = useRoute();
let store = useStore();
let activePage = ref(0);
let activePageTitile = ref("");
let activePageName = ref("");
let active2 = ref(0);
let url = HOST;
let responsiveMenuiBool = ref(false);
let bool = ref(null);
let active = computed(() => Route.path);
let type = computed(() => store.state.module1.type);

let mobileMenuArr = ref([]);
let chengeOpenMenu = computed(() => store.state.module2.chengeOpenMenu);

onMounted(() => {
  MenuCategorisRequest();
  getType();
});

watch(
  () => chengeOpenMenu.value,
  () => {
    closeMenu();
  }
);
watch(activePage, () => {
  if (activePage.value > 0) {
    store.commit("module2/hiddenArrowLeft", false);
  } else store.commit("module2/hiddenArrowLeft", true);
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
function chengeType(type) {
  store.commit("module1/chengeMenuType", type);
}
function closeMenu() {
  if (activePage.value > 0) {
    activePage.value = 0;
  }
}
function chengCategoriesPageType(type, id, title) {
  store.commit("module1/chengCategoriesPageType", [type, id, title]);
}
function getType() {
  menuTitles.forEach((element) => {
    if (element.path === active.value) {
      type.value = element.type;
    }
  });
}

async function MenuCategorisRequest() {
  const response = await axios.get(url + "/api/app/categories");
  subTitles.value = response.data.data.items;
}
async function chengeactivepage(title) {
  const response = await axios.get(
    url + `/api/app/sub_categories/${title.id}/${type.value}`
  );
  mobileMenuArr.value = response.data.data.items;

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
  overflow-x: auto;
}
.active {
  font-size: 22px;
  font-weight: 900;
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
  margin-top: 40px;
}
.cuycchtalIcon {
  display: none;
}
.sub-title {
  font-size: 18px;
  height: 40px;
  margin-top: 30px;
  border-bottom: 1px solid;
}
</style>
