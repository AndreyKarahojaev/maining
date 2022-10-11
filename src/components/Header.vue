<template>
  <div class="header flex justufy-between items-align">
    <div class="logo-header">
      <img src="../assets/img/icon/logo.svg" alt="логотип">
    </div>
    <div class="header-menu">
      <ul class="menu-list flex items-align justify-center width">
        <li class="list-items"><a href="#" class="link-item">О проекте</a></li>
        <li class="list-items"><a href="#" class="link-item">Тарифы</a></li>
        <li class="list-items"><a href="#" class="link-item">FAQ</a></li>
        <li class="list-items"><a href="#" class="link-item">Контакты</a></li>
      </ul>  
    </div>
    <div>
      <a href="" class="disabled header-entry-svg">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="17" width="24" height="2" rx="1" fill="#87B645"/>
      <rect x="12" y="23" width="24" height="2" rx="1" fill="#87B645"/>
      <rect x="12" y="29" width="24" height="2" rx="1" fill="#87B645"/>
      </svg>
      </a>
      <a href="" class="header-btn">Вход</a>
    </div>
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

.header{
  width: 100%;
  margin-bottom: 210px;
  padding: 0px;
}

.logo-header {
  display: none;
}

.menu-list {
  flex-direction: column;
  position: absolute;
  padding: 0;
  top: 0%;
  margin: 0; 
}

.list-items {
  display: inline-block;
  list-style: none;
  padding: 10px;
  width: 100%;
  border-top: $basic-grey 1px solid;
  background: $other-yellow;
  text-align: center;
    &:hover {
    background-color: $primary-disable;
    border-radius: 5px;
    }
    &:active {
      box-shadow: inset 1px 1px 10px -1px;
    }
}

.header-btn:hover {
  background: $primary-hover;
}

.header-btn:focus {
  background: $primary-press;
}

.link-item {
  font-family: $font-family;
  font-style: normal;
  font-weight: normal;
  font-size: $font-Text_24;
  line-height: $font-line140;
  color: $basic-black;
  text-decoration: none;    
}

.header-entry-svg:hover {
  transform:rotate(180deg);
  transition-duration: 1.1s;
}



@media screen and (min-width: 400px) {

  .header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 100px;
    padding: 64px 40px 0px 40px;
  }

  .logo-header {
    display: block;
  }

  .header-menu {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 60%;
  }

  .menu-list {
    flex-direction: row;
    position: relative;

  }

  .list-items {
    display: inline-block;
    list-style: none;
    width: 100%;
    align-content: center;
    text-align: center;
    border: none;
    background: $basic-wgrey;
  }

  .header-btn {
    display: inline-block;
    font-family: $font-family;
    font-style: normal;
    font-weight: normal;
    font-size: $font-Text_24;
    color: $basic-white;
    text-decoration: none;
    align-content: center;
    text-align: center;
    padding: 16px;
    background: $primary-inactiv;
    width: 200px;
    border-radius: 10px;
  }
}

@media only screen and (min-device-width : $medium ) and (max-device-width : $large ) {

  .header {
    flex-direction: column;
  }

  .header-menu {
    width: 100%;
  }

}

@media only screen and (min-device-width : $medium-mini ) and (max-device-width : $medium ) {

  .header {
    flex-direction: column;
    padding: 64px 40px 0px 40px;
  }

  .header-menu {
    width: 100%;
  }

  @media screen and (min-width: 900px) {

    .header {
      padding: 0px 40px 0px 40px;
    }

  }

}

</style>