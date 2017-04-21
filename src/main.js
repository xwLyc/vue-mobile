// Vue Project created By lyc 
import Vue from 'vue'
import App from './App'
// import Validator from 'vue-validator'
import router from './router'
/**
 * aixo vue-aixos一起用不然会报错 
 */
import axios from 'axios'   
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

/**
 * 或者 直接aixos 也可以
 * import axios from 'axios'  
 * Vue.prototype.$http = axios
 */

// Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { App }
})
