// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "babel-polyfill";
import {validate} from '../static/js/common/validate/validate.js' // 引入自定义的检验js

Vue.use(ElementUI);


Vue.prototype.$validater = validate;


axios.defaults.timeout = 60000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';// 配置请求头
axios.defaults.baseURL = 'http://localhost:8090/httpDataApi';// 配置接口地址
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
