import Vue from 'vue'
import sysLeftMenu from '@/pages/common/menu/left_menu_sys'
import msgLeftMenu from '@/pages/common/menu/left_menu_msg'
import headerMenu from '@/pages/common/menu/header_menu'
import footerMenu from '@/pages/common/menu/footer_menu'

// 左侧菜单栏
// 系统设置
Vue.component('v-sys-left-menu', sysLeftMenu);
// 消息中心
Vue.component('v-msg-left-menu', msgLeftMenu);

// 顶部导航栏
Vue.component('v-header-menu', headerMenu);

// 页脚
Vue.component('v-footer-menu', footerMenu);




