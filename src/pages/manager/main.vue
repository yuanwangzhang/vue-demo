<template>
  <div>
    <v-header-menu index="1"></v-header-menu>
    <el-container>
      <el-aside width="250px">
        <v-left-menu index="1-1" module="1" @goTo="handletabs"></v-left-menu>
      </el-aside>
      <el-main>

        <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="handletabs">
          <el-tab-pane
            :key="item.name"
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :name="item.name"
          >
            <keep-alive>
              <component :is="item.content"></component>
            </keep-alive>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    <v-footer-menu index="1"></v-footer-menu>

  </div>
</template>

<style>
  body {
    background-color: snow;
  }
</style>

<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [],
        tabIndex: 1,
      }
    },
    methods: {
      handletabs(component, title, action) {

        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          for (var i = 0; i < this.editableTabs.length; i++) {
            var tab = this.editableTabs[i];
            if (tab.title === title) {
              this.editableTabsValue = tab.name;
              return;
            }
          }
          this.editableTabs.push({
            title: title,
            name: newTabName,
            content: component
          });
          this.editableTabsValue = newTabName;
        } else {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === component) {
            tabs.forEach((tab, index) => {
              if (tab.name === component) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== component);
          }
        }
      }
    }
  }
</script>
