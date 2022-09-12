<template>
  <div class="col-12 q-mt-xl colection-container">
    <div class="row justify-center">
      <div class="col-10">
        <div class="row content justify-between">
          <div class="col-12 col-md-6">
            <div class="row items-center full-height">
              <div class="col-10">
                <div class="big-title text-weight-bold">
                  Весна 2022 коллекция
                </div>
                <div class="text text-weight-bold">
                  Есть много вариантов Lorem Ipsum, но большинство из них имеет
                  не всегда приемлемые модификации.
                </div>
                <div @click="GoTo" class="more row q-mt-lg">
                  <div class="row items-center text-weight-bold">
                    Увидеть Больше
                  </div>

                  <img
                    src="../../public/index/left.svg"
                    alt=""
                    class="q-ml-xl cursor-pointer more-icon col-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-11 col-sm-12 col-md-6" style="height: 703px">
            <video
              style="object-fit: fill; width: 100%; height: 100%"
              autoplay
              loop
              muted
              src="../../public/index/springcolection.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let scrollY = ref(0);
let goTop = ref(1050);
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
function handleScroll() {
  scrollY.value = window.scrollY;

  if (scrollY.value > 1050) {
    goTop.value = 1050;
  } else goTop.value = 1200;
}
function GoTo() {
  window.scrollTo({
    top: goTop.value,
    behavior: "smooth",
  });
}
</script>

<style scoped>
.colection-container {
  margin-top: 72px;
}
.big-title {
  font-size: 100px;
  font-weight: 800;
}
.text {
  font-size: 21px;
}
.more {
  font-size: 26px;
}
.more-icon {
  width: 74px;
  height: 74px;
}
.image {
  width: 100%;
  height: 793px;
}
@media all and (max-width: 1024px) {
  .content {
    display: flex;
    flex-direction: column-reverse;
  }
  .text {
    width: 695px;
  }
  .big-title {
    font-size: 120px;
    line-height: 1;
    margin: 30px 0px 19px;
  }
  .more {
    margin-bottom: 200px;
  }
}
@media all and (max-width: 450px) {
  video {
    width: 318px;
    height: 400px;
    margin-left: 10px;
  }
  .content {
    justify-content: center;
  }
  .big-title {
    font-size: 45px;
  }
  .text {
    font-size: 14px;
    width: 318px;
  }
  .more {
    font-size: 20px;
  }
  .more-icon {
    width: 50px;
    height: 50px;
  }
}
</style>
