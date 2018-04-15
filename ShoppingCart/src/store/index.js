/**
 * Created by f on 2017/6/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import doshoplist from './modules/doshoplist'
import dototallist from './modules/dototallist'
//import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'



export default new Vuex.Store({
  getters,
  actions,
  modules: {
    doshoplist,
    dototallist
   // products
  },
  strict: debug
})


