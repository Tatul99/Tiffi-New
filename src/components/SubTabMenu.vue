<template>
  <div class="col-12 q-mt-lg">
    <div class="row justify-center">
      <div class="col-10">
        <div class="subTitle q-mb-xl">{{ name }}</div>
        <div class="subMenuContent row justify-between">
          <div class="col-4 tayps">
            <div
              class="SubMenuTitle"
              :class="active === i ? 'active' : ''"
              v-for="(item, i) in items"
              :key="item.id"
              @click="chengeActive(i, item.id, item)"
            >
              <div v-if="item.title">
                {{ item.title }}
                <q-icon
                  class="icons"
                  :name="
                    i === active ? 'keyboard_arrow_right' : 'keyboard_arrow_up'
                  "
                ></q-icon>
              </div>
            </div>
          </div>
          <div class="col-4 brendsContent">
            <div class="Brend" v-for="brend in brends" :key="brend.id">
              {{ brend.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  items: Array,
  name: String,
  title: String,
});
let brends = ref([]);
let active = ref(0);
onMounted(() => {
  chengeActive(0, 1, props.items[0]);
});

function chengeActive(i, id, items) {
  active.value = i;
  let BrendsObj = [];
  if (items.children) {
    BrendsObj = items.children;
  }
  brends.value = items.children;
}
</script>

<style scoped>
.subTitle {
  font-size: 18px;
  font-weight: bold;
  width: 300px;
  border-bottom: 2px solid;
}
.SubMenuTitle {
  font-size: 18px;
  margin-top: 35px;
  margin-bottom: 27px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.active {
  font-size: 18px;
  font-weight: bold;
}
.brendsContent {
  height: 300px;
  overflow: auto;
  width: 200px;
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
.Brend {
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}
.tayps {
  height: 400px;
}
@media all and (max-width: 360px) {
  .brendsContent {
    width: 140px;
  }
  .tayps {
    width: 120px;
  }
}
</style>
