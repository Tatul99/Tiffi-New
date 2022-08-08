<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";
// import { computed } from "vue";
// import { useRoute } from "vue-router";
export default {
  components: { MainLayout },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
// const route = useRoute();
// let layout = computed(() => route.meta.layout);
// console.log(layout);
</script>
