// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Validator from 'vue-validator'
import router from './router'
import axios from 'axios'   //aixo vue-aixos一起用不然会报错
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { App }
})
