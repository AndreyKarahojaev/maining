<template>
  <div class="header">
    <div class="logo-header">
      <img src="../assets/img/icon/logo.svg" alt="логотип">
    </div>
    <div class="header-menu">
      <ul class="menu-list flex flex-col items-align justify-center width">
        <li class="list-items"><a href="#" class="list-items link-item"></a>О проекте</li>
        <li class="list-items"><a href="#" class="list-items link-item">Тарифы</a></li>
        <li class="list-items"><a href="#" class="list-items link-item">FAQ</a></li>
        <li class="list-items"><a href="#" class="list-items link-item">Контакты</a></li>
      </ul>  
    </div>
    <div><a href="">Вход</a></div>
  </div>
</template>

<script>
// import styles from '../components/style/style.scss'

export default {
  name: 'Header'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">

.menu-list {
  position: absolute;
  width: 100%;
  background: #F8DB73;
  padding: 0;
  top: 0%;
  margin: 0;
}

.list-items {
  list-style: none;
  padding: 10px;
  text-align: center;
}

.list-items {
  font-family: $font-family;
  font-style: normal;
  font-weight: normal;
  font-size: $font-Text_24;
  line-height: $font-line140;
}

</style>