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
            <span>短信消息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              index="1-1"
              @click="goTo('msg_center_mobile_msg_list','消息列表','add')"
            >消息列表</el-menu-item>
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
    this.goTo("msg_center_mobile_msg_list", "消息列表", "add");
  }
};
</script>
