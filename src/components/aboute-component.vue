<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12 col-md-7 map-div">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.9968962187836!2d37.77511461596376!3d44.71967487909905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f1f93dfa8e4913%3A0x15b6d2f700a965a8!2sMichurinskiy%20Pereulok%2C%204%2C%20Novorossiysk%2C%20Krasnodarskiy%20kray%2C%20Russia%2C%20353900!5e0!3m2!1sen!2s!4v1650878763726!5m2!1sen!2s"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="col-12 col-md-4 container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-12">
            <div class="row justify-center q-mb-xl">
              <div class="mini-title col-12">Адрес</div>
              <div class="info col-12">Зубово-Полянский район</div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-12">
            <div class="row justify-center q-mb-xl">
              <div class="mini-title col-12">Телефонный Номер</div>
              <div class="info col-12">+7547766992265</div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-12">
            <div class="row justify-center q-mb-xl">
              <div class="mini-title col-12">Эл. адрес</div>
              <div class="info col-12">TIFFI.2022@gmail.com</div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-12">
            <div class="row justify-start q-mb-xl">
              <div class="mini-title col-12">Мы в социальных сетях</div>
              <div class="info col-12 col-md-10">
                <div class="row justify-start">
                  <div class="col-8 col-sm-10 col-md-10 q-mt-md">
                    <div class="row justify-between">
                      <img
                        src="../../public/icons/insta.png"
                        alt=""
                        class="icon"
                      /><img
                        src="../../public/icons/fac.png"
                        alt=""
                        class="icon"
                      /><img
                        src="../../public/icons/tv.png"
                        alt=""
                        class="icon"
                      /><img
                        src="../../public/icons/telegram.png"
                        alt=""
                        class="icon"
                      />
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
</template>

<script setup></script>

<style scoped>
.map {
  width: 876px !;
  height: 623px;
}
.mini-title {
  font-size: 40px;
  font-weight: 600;
}
.info {
  font-size: 30px;
  font-weight: 100;
}
.icon {
  width: 56px;
  height: 56px;
}
.container {
  margin-left: 100px;
}

@media all and (max-width: 1024px) {
  .map {
    width: 824px;
    height: 443px;
  }
  .map-div {
    display: flex;
    justify-content: center;
  }
  .container {
    margin-top: 65px;
    margin-left: 30px;
  }
  .info {
    font-size: 28px;
    font-weight: bold;
  }
  .mini-title {
    font-size: 29px;
  }
}
@media all and (max-width: 455px) {
  .map {
    width: 317px;
    height: 288px;
  }
  .info {
    font-size: 19px;
  }
  .mini-title {
    font-size: 20px;
  }
  .icon {
    width: 47px;
    height: 47px;
  }
}
</style>
