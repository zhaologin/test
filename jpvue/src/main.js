import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from "./components/MyHeader"
import MyFood from "./components/MyFood"
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.min.css';
Vue.use(MintUI)
Vue.use(ElementUI);
axios.defaults.baseURL = 'http://127.0.0.1:3000',
Vue.prototype.axios=axios;
Vue.component("my-header",MyHeader)
Vue.component("my-food",MyFood)
Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
