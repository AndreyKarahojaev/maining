<template>
  <div class="questions">
    <h2 class="questions-title">FAQ</h2>
    <div class="questions-block questions-all">
      <div class="questions-list list-all">
        <div class="questions-list__item">
          <h3 class="list-all__items all-click all-open">Что такое майнинг криптовалют?</h3> 
          <p class="all-text active">Криптовалюты добывается оборудованием для майнинга, которое используют свои вычислительные мощности для возможности обработки транзакций и получения вознаграждений. Точнее говоря, майнинг - это процесс записи транзакций в блокчейн и получение за это вознаграждения.</p>
        </div>
        <div class="questions-list__item">
          <h3 class="list-all__items all-click all-closed">Что такое хэшрейт?</h3>
          <p class="all-text disabled">Lorem ipsum dolor sit amet consectetur adipisicing elit.. Точнее говоря, майнинг - это процесс записи транзакций в блокчейн и получение за это вознаграждения </p>
        <div class="questions-list__item">
          <h3 class="list-all__items all-click all-closed">Что такое пул для майнинга?</h3>
          <p class="all-text disabled"> Voluptatibus, error?  Точнее говоря, майнинг - это процесс записи транзакций в блокчейн и получение за это вознаграждения</p>
        </div>
        <div class="questions-list__item">
          <h3 class="list-all__items all-click all-closed">Cколько я заработаю?</h3>
          <p class="all-text disabled">Eum veritatis error optio impedit consequatur consectetur, voluptatibus quo consequuntur, eveniet, reiciendis dolorem.  Точнее говоря, майнинг - это процесс записи транзакций в блокчейн и получение за это вознаграждения</p>
        </div>
        <div class="questions-list__item">
          <h3 class="list-all__items all-click all-closed">Как начать работать с сервисом?</h3>
          <p class="all-text disabled">Exercitationem ipsum dolorum repudiandae numquam quo aut Точнее говоря, майнинг - это процесс записи транзакций в блокчейн и получение за это вознаграждения</p>
        </div>
        <div class="questions-list__item">
          <h3 class="list-all__items all-click all-closed">Как это работает?</h3>
          <p class="all-text disabled">Exercitationem ipsum dolorum repudiandae numquam quo aut  Точнее говоря, майнинг - это процесс записи транзакций в блокчейн и получение за это вознаграждения</p>
        </div>
        <div class="questions-list__item">
          <h3 class="list-all__items all-click all-closed">Зачем мне регистрироваться на стороннем пуле?</h3>
          <p class="all-text disabled">Exercitationem ipsum dolorum repudiandae numquam quo aut  Точнее говоря, майнинг - это процесс записи транзакций в блокчейн и получение за это вознаграждения</p>
        </div>
        <div class="questions-list__item">
          <h3 class="list-all__items all-click all-closed">Почему сейчас необходимо использовать пул для майнинга Pool.in</h3>
          <p class="all-text disabled">Exercitationem ipsum dolorum repudiandae numquam quo aut  Точнее говоря, майнинг - это процесс записи транзакций в блокчейн и получение за это вознаграждения</p>
        </div>
        <div class="questions-list__item">
          <h3 class="list-all__items all-click all-closed">Почему я не могу получать сразу выплаты с вашего сервиса?</h3>
          <p class="all-text disabled">Exercitationem ipsum dolorum repudiandae numquam quo aut  Точнее говоря, майнинг - это процесс записи транзакций в блокчейн и получение за это вознаграждения </p>
        </div>
        <div class="questions-list__item">
          <h3 class="list-all__items all-click all-closed">Какие преимущества нашего сервиса облачного майнинга  перед другими?</h3>
          <p class="all-text disabled">Exercitationem ipsum dolorum repudiandae numquam quo aut  Точнее говоря, майнинг - это процесс записи транзакций в блокчейн и получение за это вознаграждения</p>
        </div>
        </div>
      </div>
      <div class="questions-block questions-remain">
        <h3 class="remain-title">
          Остались вопросы и нужна помощь?
        </h3>
        <p class="remain-text">
          Напишите нам на <a href="mailto:">почту</a> и мы постараемся решить ваш вопрос
        </p>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
}
</script>

<style lang="scss" scoped>
.questions {
  display: flex;

  flex-wrap: wrap;
  width: 100%;
  padding: 96px 16px;
}

.questions-title{
  width: 100%;
  font-family: $font-family;
  font-weight: $weight-bold;
  font-size: $font-Text_24;
  line-height: $font-line140;
  text-align: center;
  padding-bottom: 30px;
}

.questions-block {
  display: flex;
  flex-direction: column;
  font-family: $font-family;
}

.questions-remain {
  margin-top: 30px;
}
.remain-title {
  font-weight: $weight-bold;
  font-size: $font-Text_18;
  line-height: $font-line140;
  margin: 0;
  margin-bottom: 16px;
}
.remain-text {
  font-weight: $weight-bold;
  font-size: $font-Text_14;
  line-height: $font-line140;
}

.questions-list {
  list-style: none;
  padding: 0;
  position: relative;
}

.list-all__items {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 328px;
  height: 72px;
  font-family: $font-family;
  font-weight: $weight-bold;
  font-size: $font-Text_14;
  line-height: $font-line140;
  text-align: left;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10%;
  margin-bottom: 24px;
}
.all-text {
  font-size: $font-Text_14;
  line-height: $font-line140;
  padding: 16px 0px 24px 0px;
}

.all-open {
  position: relative;
  background: $other-yellow;
}

.all-closed {
  position: relative;
  background: $primary-inactiv;
}

.all-open::before {
  position: absolute;
  content: '';
  display: block;
  width: 18px;
  height: 19px;
  right: 10%;
  background-image: url("../../assets/img/icon/arrow2.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transform: rotate(90deg);
}    

.all-closed::before {
  position: absolute;
  content: '';
  display: block;
  width: 18px;
  height: 19px;
  right: 10%;
  background-image: url("../../assets/img/icon/arrow2.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}



@media screen and (max-width: 920px) {

  .questions {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  .questions-block {
    width: 50%;
  }

  .questions-list__item{
    max-width: 776px;
  }

}

</style>