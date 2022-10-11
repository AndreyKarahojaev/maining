<template>
  <div class="edge">
    <h2 class="edge-title">Преимущества облачного майнинга</h2>
    <div class="edge-wrapper">
      <div class="edge-content">
        <div class="edge-block">
          <h3 class="edge-block__title regular-title regular__title--style">Обычный майнинг</h3>
          <ul class="edge-list regular-list">
            <li class="list-item edge-list__items regular-item">
              Ожидаете поставки майнеров и теряете драгоценное время.
            </li>
            <li class="list-item edge-list__items regular-item">
              Тратите время на подготовку оборудования к работе.
            </li>
            <li class="list-item edge-list__items regular-item">
              Отсутствие достаточного охлаждения снижает эффективность
              оборудования. Велик риск перегревания и поломки. Результат –
              дополнительные затраты и потеря времени.
            </li>
            <li class="list-item edge-list__items regular-item">
              Высокая стоимость электроэнергии.
            </li>
            <li class="list-item edge-list__items regular-item">
              Необходимость уделять много времени обслуживанию оборудование.
              Результат поломок – потеря времени и упущенная прибыль.
            </li>
            <li class="list-item edge-list__items regular-item">
              Шум от оборудования и избыточное тепло.
            </li>
            <li class="list-item edge-list__items regular-item">
              Дополнительные расходы на обеспечение безопасности майнеров.
            </li>
            <li class="list-item edge-list__items regular-item">
              Возможны дополнительные траты на оплату таможенных пошлин при
              поставке оборудования.
            </li>
            <li class="list-item edge-list__items regular-item">
              Необходимость в специальных знаниях для настройки и поддержания
              работоспособности майнеров.
            </li>
          </ul>
        </div>
        <div class="edge-block">
          <h3 class="edge-block__title cloud-title cloud__title--style">Облачный майнинг</h3>
          <ul class="edge-list cloud-list">
            <li class="list-item edge-list__items cloud-item">
              Оборудование всегда готово к работе. Просто выбирайте контракт и
              начинайте зарабатывать.
            </li>
            <li class="list-item edge-list__items cloud-item">
              Просто и удобно. Не нужно ничего настраивать и иметь IT-навыки.
            </li>
            <li class="list-item edge-list__items cloud-item">
              Оптимальные промышленные условия обеспечивают максимальную
              производительность майнеров.
            </li>
            <li class="list-item edge-list__items cloud-item">
              Низкая стоимость электроэнергии, значит отличные цены на всех
              контрактах.
            </li>
            <li class="list-item edge-list__items cloud-item">
              Бесперебойная работа. 24/7/365 контроль за работой майнеров.
              Высочайшие стандарты безопасности.
            </li>
            <li class="list-item edge-list__items cloud-item">
              Тишина и спокойствие.
            </li>
            <li class="list-item edge-list__items cloud-item">
              Гарантия безопасности майнеров.
            </li>
            <li class="list-item edge-list__items cloud-item">
              Отсутствие непредвиденных расходов. Вы платите только один раз и
              только ту сумму, которая указана в контракте.
            </li>
            <li class="list-item edge-list__items cloud-item">
              Квалифицированные специалисты.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edge",
};
</script>

<style lang="scss" scoped>
.edge {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 130px;
  margin-bottom: 140px;

  background-image: url("../../assets/img/icon/edge-blue-block.svg");
  background-repeat: no-repeat;
  background-position: 0% 10%;
  background-size: 30% 42%;
}

.edge-wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 1408px;
}

.edge-title {
  font-family: $font-Text_24;
  font-style: normal;
  font-weight: $weight-bold;
  font-size: $font-H2_48;
  line-height: $font-line140;
  text-align: center;
}

.edge-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

.edge-block {
  text-align: center;
  height: 100%;
}

.edge-block__title {
  font-family: $font-family;
  font-style: normal;
  font-weight: $weight-bold;
  font-size: $font-H3_36;
  line-height: $font-line130;
}

.edge-block__title {
  font-family: $font-family;
  font-style: normal;
  font-weight: $weight-bold;
  font-size: $font-H3_36;
  line-height: $font-line130;
  margin: 0;
  padding: 80px 0 80px 80px;
}

.cloud-title,
.regular-title {
  display: inline-block;
  position: relative;
  width: 100%;
  max-height: 208px;
  background: $other-greyback;
  border-radius: 12px;
  z-index: 1;
}

.regular-title {
  border-top: 16px solid $other-red;
}

.cloud-title {
  border-top: 16px solid $primary-inactiv;
}

.regular__title--style {
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 128px;
    height: 128px;
    background-image: url("../../assets/img/icon/regular-maining.svg");
    background-repeat: no-repeat;
    background-size: 80%;
    top: 27%;
    left: 8%;
  }
  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 128px;
    height: 128px;
    background-image: url("../../assets/img/icon/bk-regular-maining.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center bottom;
    top: 32%;
    right: 0%;
    z-index: -1;
  }
}

.cloud__title--style {
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 128px;
    height: 128px;
    background-image: url("../../assets/img/icon/cloud-maining.svg");
    background-repeat: no-repeat;
    background-size: 80%;
    top: 27%;
    left: 8%;
  }
  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 128px;
    height: 128px;
    background-image: url("../../assets/img/icon/bk-cloud-maining.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center bottom;
    top: 32%;
    right: 0%;
    z-index: -1;
  }
}

.edge-list {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
}

.edge-list__items {
  font-family: $font-family;
  font-style: normal;
  font-weight: normal;
  font-size:  $font-Text_18;
  line-height: $font-line140;
  padding: 34px 16px 24px 32px;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px 8px 8px 4px;
  min-height: 112px;
  max-height: 176px;
  max-width: 640px;
  margin-bottom: 24px;
}

.edge-list__items:nth-child(3) {
  text-align: center;
  height: 176px;
}

.edge-list__items:nth-child(5) {
  height: 176px;
}

.edge-list__items:nth-last-child() {
  height: 176px;
}

.edge-list__items:nth-last-child(even) {
  background: $other-greyback;
}

.edge-list__items:nth-last-child(odd) {
  background: none;
}

.cloud-item {
  border-left: 8px solid $primary-inactiv;
}

.regular-item {
  border-left: 8px solid $other-red;
}

@media screen and (min-width: 600px) {
  .edge-title {
    font-family: $font-family;
    font-style: normal;
    font-weight: $weight-bold;
    font-size: $font-H2_48;
    text-align: center;
  }
  
  .edge-content {
    flex-wrap: wrap;
  }
}
</style>