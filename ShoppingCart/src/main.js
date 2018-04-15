// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import store from './store'


//引入以rem为单位的JS
import './script/rem.js'

Vue.filter('AmoutFormat', (value, unit) =>{  
    return '¥ ' + value.toFixed(2) + unit;
});


/*import { currency } from './currency'
Vue.filter('currency')*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
