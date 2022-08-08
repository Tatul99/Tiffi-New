<template>
  <div class="col-12 fotter-main">
    <div class="row justify-center">
      <div class="col-10">
        <div class="logo-div row justify-between items-center">
          <div class="line"></div>
          <img src="/footer/TIFFi.png" alt="" class="logo" />
          <div class="line"></div>
        </div>
        <div class="row justify-between gt-xs contant">
          <div class="col-4 col-one">
            <div class="col-12">
              <div class="row justify-start q-mb-xs">Телефонный Номер</div>
              <div class="row justify-start info">+7547766992265</div>
            </div>
            <div class="col-12 q-mt-md">
              <div class="row justify-start q-mb-xs">Адрес</div>
              <div class="row justify-start info">Зубово-Полянский район</div>
            </div>
          </div>
          <div class="col-4 col-md-3">
            <div class="row justify-between">
              <div
                class="col-6 text-left items"
                v-for="item in menuTitles"
                :key="item"
              >
                <router-link :to="item.path"
                  ><div class="name">{{ item.name }}</div></router-link
                >
              </div>
            </div>
          </div>
          <div class="col-4 col-md-3 adreses">
            <div class="row text-right">
              <div class="col-12 adrees">Эл. адрес</div>
              <div class="el-adrees col-12">TIFFI.2022@gmail.com</div>
            </div>
            <div class="row justify-end social">Мы в социальных сетях</div>

            <div class="row justify-between q-mt-lg">
              <a
                target="blanck"
                href="https://www.instagram.com/tiffi_nvrsk/?igshid=YmMyMTA2M2Y="
                ><img src="/footer/insta.png" class="icon" alt=""
              /></a>
              <a
                href="https://www.facebook.com/italshoesnvr/?ti=as"
                target="blanck"
                ><img src="/footer/fac.png" class="icon" alt=""
              /></a>
              <img src="/footer/telegram.png" class="icon" alt="" />
            </div>
          </div>
        </div>
        <div class="content-mobail lt-sm row justify-center">
          <div
            class="adres-mobile items-mobilr col-10 row items-center justify-center"
          >
            <div class="row justify-center items-center">
              Зубово-Полянский район
            </div>
          </div>
          <div
            class="el.adres-mobile items-mobilr col-10 row items-center justify-center"
          >
            <div class="row justify-center items-center">
              TIFFI.2022@gmail.com
            </div>
          </div>
          <div
            class="phone-mobile items-mobilr col-10 row items-center justify-center"
          >
            <div class="row justify-center items-center">+7547766992265</div>
          </div>
          <div class="icons-mobile cursor-pointer col-12">
            <div class="row justify-between">
              <a
                target="blanck"
                href="https://www.instagram.com/tiffi_nvrsk/?igshid=YmMyMTA2M2Y="
                ><img src="/footer/insta.png" alt="" class="icon"
              /></a>
              <a
                href="https://www.facebook.com/italshoesnvr/?ti=as"
                target="blanck"
                ><img src="/footer/fac.png" alt="" class="icon"
              /></a>
              <img src="/footer/telegram.png" alt="" class="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let menuTitles = [
  {
    name: "Главная",
    path: "/",
  },
  {
    name: "Новинки",
    path: "/New",
  },
  {
    name: "для Женщин",
    path: "/ForWoman",
  },
  {
    name: "Скидки",
    path: "/Discounts",
  },
  {
    name: "для Мужчин",
    path: "/forMan",
  },

  {
    name: "О Нас",
    path: "/Aboute",
  },
];
</script>

<style scoped>
.fotter-main {
  min-height: 30vh;
  background-color: #000000;
}
.logo-div {
  margin-top: 124px;
}
.line {
  width: 596px;
  height: 2px;

  background-color: #fff;
  /* border: 2px solid #fff; */
}
.contant {
  margin-top: 126px;
  margin-bottom: 146px;
}
.col-one {
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  font-size: 22px;
  font-weight: bold;
}
.info {
  font-size: 25px;
  font-weight: bold;
}
.items {
  margin-bottom: 18px;
}
.name {
  font-size: 21px;
  color: #fff;
}
.adreses {
  color: #fff;
}
.adrees {
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: bold;
}
.el-adrees {
  font-size: 25px;
  margin-bottom: 25px;
  font-weight: bold;
}
.social {
  font-size: 30px;
  font-weight: bold;
}
.icon {
  width: 55px;
  height: 55px;
}
.content-mobail {
  margin-top: 20px;
  font-size: 15px;
  color: #fff;
}
.items-mobilr {
  height: 60px;
  border-bottom: 1px solid #fff;
}
.icons-mobile {
  margin: 52px 0px 30px;
}
@media all and (max-width: 1024px) {
  .social {
    font-size: 18px;
  }
  .name {
    font-size: 15px;
  }
  .col-one {
    font-size: 18px;
  }
  .el-adrees {
    font-size: 18px;
  }
  .adrees {
    font-size: 17px;
  }
  .icon {
    width: 41px;
    height: 41px;
  }
  .info {
    font-size: 18px;
  }
  .line {
    width: 30%;
  }
  .logo {
    width: 184px;
    height: 48px;
  }
}
@media all and (max-width: 450px) {
  .logo {
    width: 98px;
    height: 26px;
  }
}
</style>
