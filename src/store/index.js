import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    author:{
      id:'',
      username:'',
      //标识作者是否登录
      isLogined:false
    }
  },
  mutations: {
    userLogined(state,payload){
      state.author.id=payload.id;
      state.author.username=payload.username;
      state.author.isLogined=true;
    }
  },
  actions: {
  },
  modules: {
  }
})
