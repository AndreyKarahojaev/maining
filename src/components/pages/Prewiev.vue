<template>
  <div class="prewiew flex flex-col">
    <span class="prewiew__fon"></span>
    <span class="prewiew__fon-svg"></span>
    <div class="prewiew-top">
      <h1 class="prewiew-top__title">
        Снижение рисков связанных с майнингом по максимуму
      </h1>
      <p class="prewiew-top__text">Честность майнинга заложена в архитектуре</p>
      <div class="prewiew-top__btn-block btn-block">
        <a href="" class="btn-block__earn prewiew-btn">Начать зарабатывать</a>
        <a href="" class="btn-block__learn prewiew-btn">Узнать больше</a>
      </div>
    </div>
    <div class="prewiew-bottom">
      <div class="prewiew-bottom__block">
        <div class="prewiew-bottom__content">
          <h2 class="prewiew-bottom__title">open mining</h2>
          <p class="prewiew-bottom__text">
            — это прозрачный заработок на майнинге криптовалют, а самое главное
            — мы находимся в России.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prewiev",
};
</script>

<style lang="scss" scoped>
.prewiew {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  height: 1000px;
  padding-top: 20px;
}

.prewiew__fon {
  position: absolute;
  width: 100%;
  height: 20%;
  background: url("../../assets/img/icon/prewiew-bottom-graphblu.svg") 50% 3%
      no-repeat scroll border-box,
    url("../../assets/img/icon/prewiew-bottom-graphred.svg") 50% 18% no-repeat
      scroll border-box;
  opacity: 0.5;
  background-size: 119% 157%, 109% 234%;

  &:hover {
    opacity: 1;
    transition: 0.2s ease-in-out;
  }
}

.prewiew__fon-svg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/icon/Bitcoin.svg") 95% -10% no-repeat scroll
      border-box,
    url("../../assets/img/icon/Ethereum_O.svg") 2% 0% no-repeat scroll
      border-box,
    url("../../assets/img/icon/FCT_O.svg") 84% 0% no-repeat scroll border-box;
  background-size: 10% 20%, 10% 20%, 10% 20%;
  opacity: 1;
}

.prewiew-top {
  position: relative;
  flex-direction: column;
  font-family: $font-family;
  font-weight: $weight-bold;
  text-align: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  z-index: 3;
}

.prewiew-top__title {
  font-weight: $weight-bold;
  font-size: $font-Text_24;
  line-height: $font-line140;
  color: $basic-black;
}

.prewiew-top__text {
  font-weight: normal;
  font-size: $font-Text_24;
  line-height: $font-line130;
  color: $basic-black;
  margin-top: 50px;
}

.prewiew-top__btn-block {
  flex-direction: row;
  padding-top: 20px;
}

.btn-block {
  font-family: $font-family;
  font-weight: $weight-bold;
  font-size: $font-Text_18;
  line-height: 17px;
  color: $basic-black;
  padding-top: 40px;
}

.btn-block__learn {
  display: none;
}

.btn-block__earn {
  padding: 10px 18px;
  background: $primary-inactiv;
  border: 1px solid $primary-inactiv;
  border-radius: 4px;
  text-decoration: none;
  font-size: $font-Text_18;
  line-height: 17px;
  margin-right: 25px;
  color: $basic-white;
}

.prewiew-btn:hover {
  background: $primary-hover;
}

.prewiew-btn:focus {
  background: $primary-press;
}

.prewiew-bottom {
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  padding-top: 112px;
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;
  height: 100%;
  z-index: 1;

  background-image: url("../../assets/img/icon/prewiew-yellow-block.svg");
  background-repeat: no-repeat;
  background-position: 100% 20%;
  background-size: 100% 50%;
}

.prewiew-bottom__block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 100%;
  font-family: $font-family;
  background-image: url("../../assets/img/prewiew-notebook.png");
  background-repeat: no-repeat;
  background-position: 0% 75%;
  background-size: contain;
}

.prewiew-bottom__content {
  position: relative;
  top: 0%;
  right: 0%;
}

.prewiew-bottom__title {
  font-weight: $weight-bold;
  font-size: $font-H3_36;
  line-height: $font-line130;
  color: $other-ocean;
  margin: 20px 0;
  padding: 0%;
}

.prewiew-bottom__text {
  max-width: 320px;
  font-size: $font-Text_24;
  line-height: $font-line130;
  margin: 10px 0;
  padding: 0%;
}

@media only screen and (min-device-width: $small) and (max-device-width: $medium-light) {
  .prewiew__fon,
  .prewiew__fon--svg {
    display: none;
  }

  .prewiew-top__text {
    margin-top: 30px;
  }

  .prewiew-top__btn-block {
    padding-top: 10px;
  }

  .btn-block__learn {
    display: none;
  }

  .prewiew-bottom {
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    padding-top: 112px;
    margin: 0 auto;
    max-width: 1920px;
    width: 100%;
    height: 100%;
    z-index: 1;

    background-image: url("../../assets/img/icon/prewiew-yellow-block.svg");
    background-repeat: no-repeat;
    background-position: 100% 20%;
    background-size: 100% 56%;
  }

  .prewiew-bottom__block {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    width: 100%;
    font-family: $font-family;
    background-image: url("../../assets/img/prewiew-notebook.png");
    background-repeat: no-repeat;
    background-position: 0% 100%;
    background-size: contain;
  }

  .prewiew-bottom__content {
    position: relative;
    top: 0%;
    right: 0%;
  }

  .prewiew-bottom__text {
    max-width: 320px;
  }
}

@media only screen and (min-device-width: 414px) and (max-device-width: 590px) {
  .prewiew__fon,
  .prewiew__fon-svg {
    display: none;
  }

  .btn-block__learn {
    display: inline-block;
  }

  .prewiew-bottom__content {
    position: relative;
    top: -7%;
    right: 1%;
  }

  .prewiew-bottom {
    background-position: 100% 25%;
    background-size: 80%;
  }

  .prewiew-bottom__block {
    background-position: 50% 100%;
    background-size: contain;
  }
}

@media only screen and (min-device-width: $medium-light) and (max-device-width: $large) {
  .prewiew__fon,
  .prewiew__fon-svg {
    display: none;
  }

  .prewiew-top__text {
    margin-top: 20px;
  }

  .prewiew-top__btn-block {
    padding-top: 0px;
  }

  .prewiew-bottom__content {
    position: relative;
    top: -5%;
    right: 10%;
  }

  .btn-block__learn {
    display: inline-block;
    padding: 13px 20px;
    border: 1px solid $border-blue;
    border-radius: 4px;
    text-decoration: none;
    margin-left: 25px;
    color: $basic-black;
  }

  .prewiew-bottom {
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    padding-top: 112px;
    margin: 0 auto;
    max-width: 1920px;
    width: 100%;
    height: 100%;
    z-index: 1;

    background-image: url("../../assets/img/icon/prewiew-yellow-block.svg");
    background-repeat: no-repeat;
    background-position: 100% 25%;
    background-size: 80% 70%;
  }

  .prewiew-bottom__block {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    width: 100%;
    font-family: $font-family;
    background-image: url("../../assets/img/prewiew-notebook.png");
    background-repeat: no-repeat;
    background-position: 50% 150%;
    background-size: 80%;
  }

  .prewiew-bottom__content {
    position: relative;
    top: 0%;
    right: 0%;
  }

  .prewiew-bottom__text {
    max-width: 320px;
  }
}

@media screen and (min-width: 920px) {
  .prewiew {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    height: 1300px;
    z-index: 2;
  }

  .prewiew__fon {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url("../../assets/img/icon/prewiew-bottom-graphblu.svg") center
        3% no-repeat scroll border-box,
      url("../../assets/img/icon/prewiew-bottom-graphred.svg") center 18%
        no-repeat scroll border-box;
    background-size: auto, auto;
    opacity: 0.2;
  }

  .prewiew__fon-svg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url("../../assets/img/icon/Bitcoin.svg") 80% 0% no-repeat scroll
        border-box,
      url("../../assets/img/icon/Ripple_O.svg") 77% 27% no-repeat scroll
        border-box,
      url("../../assets/img/icon/Ethereum_O.svg") 10% 1% no-repeat scroll
        border-box,
      url("../../assets/img/icon/FCT_O.svg") 22% 21% no-repeat scroll border-box;
    opacity: 1;
      &:hover {
        opacity: 0.4;
        transition: 0.2s ease-in-out;
      }
  }

  .prewiew-top {
    position: relative;
    flex-direction: column;
    font-family: $font-family;
    font-style: normal;
    text-align: center;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .prewiew-top__title {
    font-weight: $weight-bold;
    font-size: $font-H1_60;
    line-height: $font-line130;
    letter-spacing: 2px;
    color: $basic-black;
  }

  .prewiew-top__text {
    font-weight: normal;
    font-size: $font-Text_24;
    line-height: $font-line130;
    color: $basic-black;
  }

  .prewiew-top__btn-block {
    flex-direction: row;
    padding-top: 20px;
  }

  .btn-block {
    font-family: $font-family;
    font-weight: $weight-bold;
    font-size: $font-Text_18;
    line-height: 17px;
    color: $basic-black;
  }

  .btn-block__learn {
    display: inline-block;
    padding: 10px 16px;
    border: 1px solid $border-blue;
    border-radius: 4px;
    text-decoration: none;
    margin-left: 25px;
    color: $basic-black;
  }

  .btn-block__earn {
    padding: 10px 18px;
    background: $primary-inactiv;
    border: 1px solid $primary-inactiv;
    border-radius: 4px;
    text-decoration: none;
    margin-right: 25px;
    color: $basic-black;
  }

  .prewiew-bottom {
    display: flex;
    position: relative;
    padding-top: 120px;
    margin: 0 auto;
    max-width: 1920px;
    max-height: 1300px;
    width: 100%;
    height: 100%;
    z-index: 1;

    background-image: url("../../assets/img/icon/prewiew-yellow-block.svg");
    background-repeat: no-repeat;
    background-position: 180% 95%;
    background-size: 80% 93%;
  }

  .prewiew-bottom__block {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    width: 100%;
    font-family: $font-family;
    background-image: url("../../assets/img/prewiew-notebook.png");
    background-repeat: no-repeat;
    background-position: 0%;
    background-size: 60% 100%;
  }

  .prewiew-bottom__content {
    position: relative;
    top: 10%;
    right: 3%;
  }

  .prewiew-bottom__title {
    font-weight: $weight-bold;
    font-size: $font-H2_48;
    color: $other-ocean;
    margin: 20px 0;
    padding: 0%;
  }

  .prewiew-bottom__text {
    max-width: 500px;
    font-size: $font-Text_30;
    line-height: $font-line130;
    margin: 10px 0;
    padding: 0%;
  }
}
</style>