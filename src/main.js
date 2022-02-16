import Vue from 'vue'
import App from './App.vue'
import './components/scss/global.scss'
import './components/scss/fonts.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
