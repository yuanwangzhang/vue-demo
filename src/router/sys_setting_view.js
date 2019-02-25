import Vue from 'vue'
import sys_user_list from '@/pages/manager/sys_setting/sys_user/sys_user_list'
import sys_show_perms from '@/pages/manager/sys_setting/sys_user/sys_show_perms'


Vue.component('sys_setting_sys_user_sys_user_list', sys_user_list);
Vue.component('sys_setting_sys_user_sys_show_perms', sys_show_perms);

export default [

  {
    // 进行路由配置(懒加载),规定'/main'引入到系统设置main组件
    path: '/sys_main',
    component: resolve => require(['@/pages/manager/sys_setting/main'], resolve),
    // 嵌套路由
    children: [
      {

        name: "用户管理",
        path: '/sys_user/sys_user_list',
        component: sys_user_list,

      },
      {

        name: "用户权限",
        path: '/sys_user/sys_user_perms',
        component: sys_show_perms,

      }
    ]
  }
]




