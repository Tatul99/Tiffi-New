<template>
  <div class="main-div2 row justify-between">
    <div v-for="item in arr" :key="item.id" class="col-12 col-md-6 items">
      {{ item.title }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  arr: Array,
});
</script>

<style scoped>
.main-div2 {
  width: 400px;
  max-height: 500px;
  overflow: auto;
  margin-left: 100px;
  font-weight: bold;
  font-family: "PT Serif", serif;
}
.items {
  padding: 20px 0px;
}
::-webkit-scrollbar {
  width: 4px;
  height: 50px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #000000;
  border-radius: 10px;
}
@media all and (max-width: 1024px) {
  .main-div2 {
    margin-left: 60px;
    width: 200px;
    height: 300px;
  }
}
</style>
