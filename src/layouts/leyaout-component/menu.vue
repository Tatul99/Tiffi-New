<template>
  <div class="col-12 q-mt-xl">
    <div class="row justify-center">
      <div class="col-10 menu-content">
        <div class="row menu-responsive-line justify-between">
          <div class="menu-respons items-center" @click="openResponsMenu()">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="logo-mec1 q-mb-md col-2">
            <img
              src="/icons/logo-big.png"
              alt="proecti logo"
              style="width: 192px; height: 46px"
              class="logo"
            />
          </div>
          <q-dialog v-model="openMenu" persistent>
            <div class="responsUnderMenu col-12" v-if="openMenu">
              <div class="row justify-center" style="overflow-x: hidden">
                <div class="col-12">
                  <div class="row justify-center">
                    <div class="col-12 background">
                      <div class="row justify-center">
                        <div class="col-2 row items-end justify-end">
                          <img
                            v-if="!hiddenArrowLeftBool"
                            @click="chengeOpenMenu()"
                            src="/icons/arrow-left.png"
                            alt="arrow-left"
                            class="arrow-left"
                          />
                        </div>
                        <div class="col-6">
                          <div class="row justify-end">
                            <img
                              src="/icons/logo-big.png"
                              alt=""
                              class="logo-mec"
                            />
                          </div>
                        </div>
                        <div class="col-4 row items-end justify-center">
                          <div class="col-8 row justify-end items-end">
                            <q-icon
                              style="font-size: 32px"
                              @click="openMenu = false"
                              name="close"
                              class="cursor-pointer close q-mt-xl"
                            ></q-icon>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 background">
                      <!-- mobile-responsive menu -->
                      <under-menu-mobile />
                      <div class="col-8 gt-xs q-mt-xl responsive-menu-line">
                        <div class="menu row justify-around">
                          <div
                            class="items col-12 col-sm-2 cursor-pointer text-weight-bold"
                            v-for="(item, i) in menuTitles"
                            :key="item.id"
                          >
                            <router-link :to="item.path">
                              <div
                                @click="
                                  chengeTypeResponsive(item.type, item.path, i)
                                "
                                :class="active === i ? 'active' : ''"
                              >
                                {{ item.name }}
                              </div></router-link
                            >
                            <q-icon
                              class="icons"
                              :name="
                                i === active2
                                  ? 'keyboard_arrow_down'
                                  : 'keyboard_arrow_up'
                              "
                            ></q-icon>
                          </div>
                        </div>
                      </div>
                      <under-menu v-if="cuycTalMenu" class="background gt-xs" />
                    </div>
                    <div class="col-12">
                      <div class="opacity"></div>
                    </div>
                  </div>
                </div>
              </div></div
          ></q-dialog>

          <!-- <div class="opacity lt-md" v-if="responsiveMenuiBool"></div> -->
          <div class="col-8 menu-line">
            <div class="menu row justify-around">
              <div
                class="items cursor-pointer text-weight-bold"
                v-for="(item, i) in menuTitles"
                :key="item"
                :class="i > 0 && i < menuTitles.length - 1 ? 'items2' : ''"
              >
                <router-link :to="item.path">
                  <div
                    @click="chengeMenuActive(i, item.path)"
                    @mouseover="
                      item.type !== undefined
                        ? chengeType(item.type, item.path, active)
                        : ''
                    "
                    :class="active === i ? 'active' : ''"
                  >
                    {{ item.name }}
                  </div></router-link
                >
                <under-menu class="hidden-menu gt-sm" />
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="lt-md row search justify-end">
              <q-input
                borderless
                v-model="searchInputValue"
                class="search-input"
                Placeholder="Search"
                type="search"
                @click="bool = true"
                :class="bool || searchInputValue.length ? 'bacel' : 'pakel'"
              >
                <template v-slot:prepend class="">
                  <router-link
                    :to="searchInputValue.length ? '/searchedProducts' : ''"
                    ><q-icon @click="bool1()" name="search"></q-icon
                  ></router-link>
                </template>
              </q-input>
            </div>
            <div class="gt-sm row search justify-end">
              <q-input
                borderless
                v-model="searchInputValue"
                class="search-input"
                Placeholder="Search"
                type="search"
                @click="bool = true"
                :class="bool || searchInputValue.length ? 'bacel' : 'pakel'"
              >
                <template v-slot:append class="">
                  <router-link
                    :to="searchInputValue.length ? '/searchedProducts' : ''"
                    ><q-icon @click="bool1()" name="search"></q-icon
                  ></router-link>
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";
import { HOST } from "../../providers";
import UnderMenu from "../../components/underMenu.vue";
import UnderMenuMobile from "../../components/under-menu-mobile.vue";
import module1 from "src/store/module1";
let url = HOST;
let store = useStore();
let Route = useRoute();
let path = Route.path;

watch(path, () => {
  store.commit("module1/chengMenuCategoriesPageType", "");
});

let subActive = ref("");
let type = computed(() => store.state.module1.categoriesType);
let active = computed(() => store.state.module1.activeMenuItem);

onMounted(() => {
  chengeTypeResponsive(
    menuTitles[active.value].type,
    menuTitles[active.value].type,
    active.value
  );
  if (Route.path == "/ForMan" || Route.path == "/Aboute") {
    cuycTalMenu.value = true;
  }
});
watch(
  () => type.value,
  (type) => {
    menuTitles.forEach((el, i) => {
      if (el.type === type) {
        store.commit("module1/chengeActiveMenu", i);
      }
    });
  }
);
let bool = ref(false);
let openMenu = ref(false);
let active2 = ref(false);
let chengeOpenMenuBool = ref(0);
let cuycTalMenu = ref(false);
let searchInputValue = ref("");
let responsiveMenuiBool = false;
let MenuType = ref("");
let hiddenArrowLeftBool = computed(
  () => store.state.module2.hiddenArrowLeftBool
);
function chengeMenuActive(index, path) {
  if (path === "/" || path === "/New" || path === "/Discounts") {
    store.commit("module1/chengeMenuActiveType", path);
  }
  store.commit("module1/chengeActiveMenu", index);
}
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
    // type: "for_women",
  },
  {
    id: 5,
    name: "Скидки",
    path: "/Discounts",
    // type: "for_men",
  },
  {
    id: 6,
    name: "О Нас",
    path: "/Aboute",
  },
];
function chengeOpenMenu() {
  store.commit("module2/chengeOpenMenu");
}
function chengeTypeResponsive(type, path, index) {
  store.commit("module1/chengeMenuType", type);
  store.commit("module1/chengeActiveMenu", index);
  store.commit("module2/changeCategoriesactive", [1, 0]);
  if (type === undefined) {
    cuycTalMenu.value = false;
  } else cuycTalMenu.value = true;
  chengeMenuActive(index, path);
  subActive.value = "";
}
function chengeType(type, path, index) {
  store.commit("module1/chengeMenuType", type);
  store.commit("module1/chengeActiveMenu", index);
  store.commit("module2/changeCategoriesactive", [1, 0]);
  cuycTalMenu.value = true;
  subActive.value = "";
}

function bool1() {
  bool.value = !bool.value;
  if (searchInputValue.value.length) {
    store.commit("module1/chengeSerchedText", searchInputValue.value);
  }
}

function openResponsMenu() {
  openMenu.value = true;
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000000;
}
.tiffi-logo {
  width: 139px;
  height: 33px;
}
.menu-content {
  border-bottom: 1px solid #474747;
}
.items {
  font-size: 20px;
  font-weight: 300;
}
.hidden-menu {
  display: none;
}
.items2:hover .hidden-menu {
  display: block;
}
.active {
  font-size: 22px;
  font-weight: 900;
  /* position: relative; */
}
.logo-mec1 {
  width: 192px;
  height: 46px;
  /* margin-top: 85px; */
}
.icons {
  display: none;
}
.logo-mec {
  width: 192px;
  height: 46px;
  margin-top: 85px;
}
/* .active:after {
  content: "";
  width: 100%;
  height: 5px;
  position: absolute;
  background-color: #000000;
  bottom: -67%;
  left: 0px;
  border-radius: 5px 5px 0px 0px;
} */
.search-input {
  border-radius: 18px;
  border: 1px solid;
  padding: 0px 10px;
  width: 190px;
  height: 34px;
}
.line {
  width: 51px;
  height: 4px;
  border-radius: 12px;
  margin-bottom: 8px;
  background: #000000;
}
.menu-respons {
  display: none;
}
.responsUnderMenu {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
}
.close {
  width: 45px;
  height: 45px;
}

@media all and (max-width: 1025px) {
  .responsUnderMenu {
    max-height: 100% !important;
    background: unset;
  }
  .menu-respons {
    display: block;
  }
  .menu-content {
    border-bottom: unset;
    /* display: flex; */
    /* flex-direction: reverse; */
    justify-content: space-between;
  }
  .menu-responsive-line {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .menu-line {
    display: none;
  }
  .search {
    display: flex;
    flex-direction: row-reverse;
    width: 206px;
  }
  .background {
    background: #fff;
  }
  .opacity {
    width: 100vw;
    height: 100%;
    background: rgb(15, 15, 15);
    opacity: 0.6;
  }
}
@media all and (max-width: 450px) {
  .arrow-left {
    width: 32px;
    height: 25px;
  }
  .line {
    width: 27px;
    margin-bottom: 4px;
  }
  .menu-respons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .logo-mec1 {
    width: 117px;
    height: 28px;
    /* margin-top: 85px; */
  }
  .logo {
    width: 117px !important;
    height: 28px !important;
  }
  .logo-mec {
    width: 117px !important;
    height: 28px !important;
  }
  .search {
    width: 130px;
  }
  .items {
    display: flex;
    height: 60px;
    width: 80%;
    font-size: 20px;
    align-items: center;
    border-bottom: 1px solid;
    justify-content: center;
    position: relative;
  }
  .icons {
    display: block;
    position: absolute;
    right: 0;
  }
}
</style>
