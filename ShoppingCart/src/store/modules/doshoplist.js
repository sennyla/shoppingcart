import shoplist from '../../api/shoplist'
import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
  all: [],
  Ischecked:false,
  TotalMoney:0,
  grayShow:false,
  curProduct:''
}

// getters
const getters = {
  allProducts: state => state.all,
  Ischecked: state => state.Ischecked,
  TotalMoney:state => state.TotalMoney,
  GrayShow:state => state.grayShow,
  CurProduct:state => state.curProduct
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shoplist.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  },
  //设置新商品
  nowSetDefault({ commit },theID){
      commit(types.SET_DEFAULT, theID)  
  },
  //商品数量添加
  nowAddAction({ commit },{item,opStatus}){
    commit(types.ADD_ACTION,{item,opStatus}) 
  },
  //添加单个商品到购物车
  nowSelectCheck({commit},{item}){
    commit(types.ADD_TO_CART,{item}) 
  },
  //删除商品
  nowDelGoods({commit},{item}){
    commit(types.DEL_GOODS,{item}) 
  },
  nowSureDel({commit}){
    commit(types.SURE_DELGOODS) 
  },
  nowCancleDel({commit}){
    commit(types.CANCLE_DELGOODS) 
  },
  //全选商品到购物车
  AllSelect({commit},{flag}){
    commit(types.ALL_SELECT,{flag}) 
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },
  [types.SET_DEFAULT] (state, theID) {
    state.all.forEach((item,index)=>{
        if(item.vtest01_ID==theID){
            item.vtest01_showOld = true ;
        } else {
            item.vtest01_showOld = false ;
        }
    })
  },
  [types.ADD_ACTION] (state, {item,opStatus}) {
    if(opStatus>0){
       item.vtest01_count++
    } else {
        if(item.vtest01_count<2){
            item.vtest01_count = 1
        } else {
            item.vtest01_count--
        }
    }
    CalculateTotal(state)
  },
  [types.ADD_TO_CART](state,{item}){
    if( typeof item.checked == 'undefined' ){
        Vue.set(item,"checked",true)
    } else {
        item.checked =! item.checked;
    }
    CalculateTotal(state)
  },
  [types.ALL_SELECT](state,{flag}){
     state.Ischecked = flag;
     state.all.forEach((item,index)=>{
        if( typeof item.checked == 'undefined' ){
            Vue.set(item,"checked",state.Ischecked)
        } else {
            item.checked =state.Ischecked ;
        }
    })
     CalculateTotal(state)
  },
  [types.DEL_GOODS](state,{item}){
    state.grayShow = true;
    state.curProduct = item;
  },
  [types.SURE_DELGOODS](state){
    let index = state.all.indexOf(state.curProduct);
            state.all.splice(index,1);
            state.grayShow = false ;
  },
  [types.CANCLE_DELGOODS](state){
    state.grayShow = false 
  }
}


function CalculateTotal(state){  //计算商品中金额
    state.TotalMoney = 0;
    state.all.forEach(function(item,index){
        if(item.checked){
            state.TotalMoney += item.vtest01_momey*item.vtest01_count;
        }
    })
}



export default {
  state,
  getters,
  actions,
  mutations
}