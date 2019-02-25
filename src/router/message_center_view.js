import Vue from 'vue'
import mobile_msg_list from '@/pages/manager/msg_center/mobile/msg_list'


Vue.component('msg_center_mobile_msg_list', mobile_msg_list);

export default [

  {
    // 进行路由配置(懒加载),规定'/msg_main'引入到消息中心的main组件
    path: '/msg_main',
    component: resolve => require(['@/pages/manager/msg_center/main'], resolve),
    // 嵌套路由
    children: [
      {

        name: "消息列表",
        path: '/mobile/msg_list',
        component: mobile_msg_list,

      }
    ]
  }
]




