<template>
  <div>
    <template v-if="module==1">
      <el-menu
        style="height: 800px"
        :default-active="index"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统用户</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              index="1-1"
              @click="goTo('sys_setting_sys_user_sys_user_list','用户管理','add')"
            >用户管理</el-menu-item>
            <el-menu-item
              index="1-2"
              @click="goTo('sys_setting_sys_user_sys_show_perms','权限列表','add')"
            >权限列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>性能监控</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">cpu曲线</el-menu-item>
            <el-menu-item index="2-2">gpu曲线</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </template>
  </div>
</template>
<style>
body {
  background-color: #ffffff;
}
</style>

<script>
export default {
  props: ["index", "module"],
  data() {
    return {};
  },
  methods: {
    goTo: function(component, tabTitle, action) {
      this.$emit("goTo", component, tabTitle, action);
    }
  },
  // 模板渲染完成后加载
  mounted() {
    this.goTo("sys_setting_sys_user_sys_user_list", "用户管理", "add");
  }
};
</script>
