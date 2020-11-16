import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined:localStorage.getItem('isLogined') ? localStorage.getItem('isLogined') : 0,
    username:localStorage.getItem('username') ? localStorage.getItem('username') : ''
  
  },
  mutations:{
    logined(state,payload){
      state.isLogined=1;
      state.username=payload.username;
      localStorage.setItem('username',payload.username);
    },
    logut(state){
      state.isLogined=0;
      state.username='';
      localStorage.removeItem('isLogined');
    }
  },
  actions: {
    login(context,payload){
      axios.post('/login',qs.stringify(payload)).then(res=>{
       if(res.data.code==1){
         context.commit('logined',res.data.info);
         localStorage.setItem('isLogined','1');
         router.push('/');
       }else{
           window.alert('用户名或密码错误');
       }
      })
   }
  },
  modules: {
  }
})
