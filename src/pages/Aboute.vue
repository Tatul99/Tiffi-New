<template>
  <div class="col-12 q-mb-xl">
    <div class="row justify-center">
      <div class="col-4 page-title q-mt-xl q-mb-lg">
        <div class="row justify-center">o Нас</div>
      </div>
      <div class="col-11 col-md-10">
        <aboute-component />
      </div>
    </div>
  </div>
</template>

<script setup>
import AbouteComponent from "../components/aboute-component.vue";
</script>

<style scoped>
.page-title {
  font-size: 70px;
  font-weight: 600;
}
@media all and (max-width: 455px) {
  .page-title {
    font-size: 35px;
  }
}
</style>
