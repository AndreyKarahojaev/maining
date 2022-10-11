  <template>
  <div class="prewiewtab">
    <div class="prewiewtab__content">
      <div class="prewiewtab__block block-tab">
        <img
          class="prewiewtab__image"
          src="../../assets/img/icon/ic_risk.svg"
          alt="рисунок и описание к нему"
        />
        <h3 class="prewiewtab__title">Все риски берем на себя</h3>
        <p class="prewiewtab__text">
          Покупка оборудование, его транспортировка, размещение, оплата
          электричества, ремонт и сопровождение все эти риски мы берем на себя.
        </p>
      </div>
      <span class="block-arrow">
        <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="#D7D7D7"/>
        </svg>
      </span>
      <div class="prewiewtab__block block-tab">
        <img
          class="prewiewtab__image"
          src="../../assets/img/icon/ic_garant.svg"
          alt="рисунок и описание к нему"
        />
        <h3 class="prewiewtab__title">Гарантия честности схемы работы</h3>
        <p class="prewiewtab__text">
          Вы покупаете только мощность оборудования — хешрайт, так заключается
          контракт. Купленная мощность направляется на один из пулов, который вы
          выбираете. Сторонний пул гарантирует прозрачность, честность и
          простоту схемы.
        </p>
      </div>
      <span class="block-arrow">
        <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="#D7D7D7"/>
        </svg>
      </span>
      <div class="prewiewtab__block block-tab">
        <img
          class="prewiewtab__image"
          src="../../assets/img/icon/ic_accept.svg"
          alt="рисунок и описание к нему"
        />
        <h3 class="prewiewtab__title">Никаких скрытых платежей</h3>
        <p class="prewiewtab__text">
          Никаких ежедневных списаний за обслуживание и электроэнергию. Короткие
          контракты на 3 месяца, минимизируют риски, что майнинг станет
          невыгоден вследствие роста сложности, халвинга и падение курсов.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Prewievtable'
}
</script>

<style lang="scss" scoped>
.prewiewtab {
  width: 100%;
  position: relative;
  padding-top: 100px;
  max-width: 1920px;
  padding: 0px 40px 0px 40px;
}

.prewiewtab__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  // max-height: 1406px;
}

.prewiewtab__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: $font-family;
  color: $basic-black;
  margin-top: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.prewiewtab__block:hover {
  margin-top: 0px;
}

.block-tab {
  width: 296px;
  height: 425px;
  border: 1px solid $border-gray;
  box-sizing: border-box;
  border-radius: 24px;
  text-align: center;
}

.prewiewtab__title {
  height: 33%;
  margin: 0;
  font-weight: $weight-bolded;
  font-size: $font-Text_24;
  line-height: $font-line140;
}

.prewiewtab__text {
  height: 33%;
  margin: 0;
  font-weight: normal;
  font-size: $font-Text_14;
  line-height: $font-line140;
  padding: 0 20px 0 20px;
}

@media screen and (min-width: 320px) {

  .prewiewtab__content {
    flex-wrap: wrap;
  }

}

@media screen and (min-width: 600px) {

  .block-arrow::after {
    position: absolute;
    display: block;
    content: "";
    bottom: 45%;
    left: 0%;
  }

  .block-tab {
    width: 416px;
    height: 552px;
  }

  .prewiewtab__block {
    padding-top: 40px;
  }

  .prewiewtab__title {
    height: 33%;
    margin: 0;
    font-weight: $weight-bolded;
    font-size: $font-Text_24;
    line-height: $font-line140;
    padding-top: 40px;
  }

  .prewiewtab__text {
    height: 33%;
    margin: 0;
    font-weight: normal;
    font-size: $font-Text_18;
    line-height: $font-line140;
  }
}
</style>
