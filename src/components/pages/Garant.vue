<template>
  <div class="garant">
    <h3 class="garant_title--top">
      Гарантии
    </h3>
    <div class="garant_center">
      <div class="garant_block title--one">
        <h4>Наша компания  зарегистрирована не в офшорных зонах</h4>
        <p class="garant_text">Мы являемся резидентами Российской Федерации, у нас есть собственная площадка для размещения оборудования в Иркутской области. </p>
      </div>
      <div class="garant_block title--two">
        <h4>Подтверждено публичным пулом pool.in</h4>
        <p class="garant_text">Мы продаем контракты на облачный майнинг из уже имеющегося оборудования</p>
      </div>
      <div class="garant_block title--tri">
        <h4>Никаких скрытых действий</h4>
        <p class="garant_text">Вся финансовая отчетность о нашей компании опубликована в свободном доступе. Вы можете её найти по ИНН.</p>
      </div>
    </div>
    <div class="garant_bottom">
      <img class="garant_img" src="../../assets/img/poolin.jpg" alt="">
      <p class="garant_link--text">
        <span>
          <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.6962 0.762713L0.203933 29.7118C-0.3755 30.7288 0.348791 32 1.50766 32H34.4924C35.6513 32 36.3754 30.7287 35.7961 29.7118L19.3036 0.762713C18.7242 -0.254238 17.2756 -0.254238 16.6962 0.762713V0.762713Z" fill="#2B69DD"/>
          <path d="M18 19.5C17.1303 19.5 16.4123 18.805 16.3648 17.9172L16.003 11.1563C15.9404 9.98489 16.8525 9 18 9C19.1475 9 20.0596 9.98503 19.997 11.1563L19.6352 17.9172C19.5877 18.805 18.8697 19.5 18 19.5Z" fill="#FBAC00"/>
          <path d="M18 27.5C19.1046 27.5 20 26.7165 20 25.75C20 24.7835 19.1046 24 18 24C16.8954 24 16 24.7835 16 25.75C16 26.7165 16.8954 27.5 18 27.5Z" fill="#FBAC00"/>
          </svg>
      </span>
        Наши возможности: <a class="garant_link" href="">https://www.poolin.com/my/9053220/b...</a></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .garant {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    font-family: 'Gotham Pro';

    .garant_title--top {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      font-family: 'Gotham Pro';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 100%;
      color: #333333;
      margin-bottom: 72px;
    }

    .garant_center {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 72px;

      .title--one {background-color: #F8DB73; color: #2B69DD; margin: 0px 10px 0px 0px;}
      .title--two {background-color: #A0C4FA; color: #F5F5F5; margin: 0px 10px 0px 10px;}
      .title--tri {background-color: #FFFFFF; color: #2B69DD; margin: 0px 0px 0px 10px;}

      .garant_block{
        max-width: 560px;
        max-height: 400px;
        box-shadow: 0px 4px 20px rgba(165, 165, 165, 0.25);
        border-radius: 8px;

        .garant_text {
          font-weight: 400;
          font-size: 18px;
          line-height: 140%;
          color: #333333;
          padding: 0px 32px;
          height: 50%;
        }

        h4 {
          font-weight: 700;
          font-size: 24px;
          line-height: 140%;
          padding: 32px;
          height: 50%;
        }

      }
    }

    @media screen and (max-width: 980px) {

      .garant_img {
        display: block;
        max-width: 320px;
      }

      .garant_center{
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;

      .title--one { margin: 20px;}
      .title--two { margin: 20px;}
      .title--tri { margin: 20px;}
      }

    }
    .garant_bottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: 72px;

      .garant_link {
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        text-decoration-line: underline;
        color: #75ACFE;
      }

      .garant_link--text {
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #000000;

          span {
            position: relative;
            right: 5px;
            top: 4px;
          }
      }

    }

  }
</style>
