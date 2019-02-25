import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/common/login'
import commponent_view from './commponent_view'
import sys_setting_view from './sys_setting_view.js'
import message_center_view from './message_center_view.js'



Vue.use(Router)


export default new Router({
  // url去掉#,采用传统方式
  mode: 'history',
  routes: [
    // 注册登陆地址
    {

      path: '/',
      component: login,

    },
    // 注册系统设置组件
    ...sys_setting_view,
    // 注册消息中心组件
    ...message_center_view,
  ]
})
