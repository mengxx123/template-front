// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './scss/main.scss'
// import './scss/main.scss'
import './scss/main.scss'
import ui from './components/index'

Vue.config.productionTip = false
Vue.use(ui)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
