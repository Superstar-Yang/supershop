import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
//安装组件
Vue.use(Vuex);
const state ={
  cartList:[]
}
//创建store对象
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
//导出组件
export default store
