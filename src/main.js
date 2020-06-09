import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

import qs from 'qs';
Vue.prototype.qs=qs;

import moment from 'moment';
Vue.prototype.moment=moment;

//导入Mint UI
import MintUI from 'mint-ui';

//导入样式表文件
import "mint-ui/lib/style.min.css";

//通过Vue.ues()方法使用插件
Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
