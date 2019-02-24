import Vue from 'vue'
import sys_user_list from '@/pages/manager/sys_setting/sys_user/sys_user_list'
import sys_show_perms from '@/pages/manager/sys_setting/sys_user/sys_show_perms'


Vue.component('sys_setting_sys_user_sys_user_list', sys_user_list);

export default [

  {
    path: '/main',
    component: resolve => require(['@/pages/manager/main'], resolve),
    children: [
      {

        name: "用户管理",
        path: '/sys_user_list',
        component: sys_user_list,

      },
      {

        name: "用户权限",
        path: '/sys_user_perms',
        component: sys_show_perms,

      }
    ]
  }
]




