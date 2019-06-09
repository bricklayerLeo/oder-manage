import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
 state:{
    currenUser:null,
    isLogin:false
 },
 getters:{
     currenUser:state =>state.currenUser,
     isLogin:state =>state.isLogin
 },
 mutations:{
     userStatus(state,user){
         if(user){
            state.currentUser = user
            state.isLogin = true
         }else{
            state.currentUser = null
            state.isLogin = false  
         }
     }
 },
   
 actions : {
    // 应用mutations
    setUser({commit},user){
      commit("userStatus",user)
     
    },
   
  }
  
})