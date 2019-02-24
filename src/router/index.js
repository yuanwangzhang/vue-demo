import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/common/login'

import commponent_view from './commponent_view'
import sys_setting_view from './sys_setting_view.js'
import 'url-search-params-polyfill';



Vue.use(Router)


export default new Router({
  routes: [
    ...sys_setting_view,
    {
      path: '/',
      component: login,

    }
  ]
})
