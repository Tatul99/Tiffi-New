<template>
  <div class="col-12">
    <div class="row justify-center">
      <div class="col-10 col-md-6">
        <div class="row justify-center big-title">Платья-PRADA</div>
      </div>
      <div class="col-12 col-sm-11 main">
        <div class="row justify-center">
          <div class="col-12 col-md-6 lt-md slider-mini-size">
            <q-carousel animated v-model="slide" navigation swipeable infinite>
              <q-carousel-slide
                @click="chengeImagePage = true"
                v-for="(item, i) in image"
                :key="item.id"
                :name="i"
                :img-src="item"
              ></q-carousel-slide>
            </q-carousel>
          </div>
          <div class="col-12 col-md-6 gt-sm">
            <div class="row">
              <div class="col-12">
                <img
                  @click="chengeImagePage = true"
                  src="../../public/cloathing-info/image1.png"
                  alt=""
                  class="image1"
                />
              </div>
              <div class="col-6">
                <img
                  src="../../public/cloathing-info/image2.png"
                  alt=""
                  class="image"
                />
              </div>
              <div class="col-6">
                <img
                  src="../../public/cloathing-info/image3.png"
                  alt=""
                  class="image image-left"
                />
              </div>
              <div class="col-6">
                <img
                  src="../../public/cloathing-info/image4.png"
                  alt=""
                  class="image"
                />
              </div>
              <div class="col-6">
                <img
                  src="../../public/cloathing-info/image2.png"
                  alt=""
                  class="image image-left"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <!-- <cloaths-info-component /> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <recently-watched /> -->
  </div>
  <!-- <image-popap
    v-if="chengeImagePage"
    :slide="+slide"
    @chengebool="chegeBool()"
  /> -->
</template>
<script setup></script>

<style scoped>
.big-title {
  font-size: 70px;
  font-weight: 600;
  margin: 95px 0px 79px;
}
.image1 {
  width: 843px;
  height: 560px;
}
.image {
  width: 415px;
  height: 410px;
  margin: 12px 0px 12px;
  /* margin-left: 12px; */
}
.image-left {
  padding-left: 13px;
}
.main {
  margin-bottom: 500px;
}
.slider-mini-size {
  width: 824px;
  height: 817px;
}
@media all and (max-width: 455px) {
  .slider-mini-size {
    display: flex;
    justify-content: center;
    height: 450px;
  }
  .big-title {
    font-size: 35px;
  }
}
</style>
