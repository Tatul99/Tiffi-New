<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import { defineAsyncComponent, computed } from "vue";
import { useRoute } from "vue-router";

let layout = computed(() => {
  // const { meta } = useRoute();
  return defineAsyncComponent(() => import("./layouts/MainLayout.vue"));
});

// export default {
//   components: { MainLayout },
//   computed: {
//     layout() {
//       return this.$route.meta.layout;
//     },
//   },
// };
// const route = useRoute();
// let layout = computed(() => route.meta.layout);
// console.log(layout);
</script>
