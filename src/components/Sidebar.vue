<template>
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    active-text-color="#5aaafa"
    :router="true"
  >
    <el-menu-item index="/">
      <i class="el-icon-timer"></i>
      <template #title
        >Home at Here => {{ isCollapse ? 'Yes' : 'No' }}</template
      >
    </el-menu-item>

    <el-submenu index="3">
      <template #title>
        <i class="el-icon-loading"></i>
        <span>MongoDB 操作</span>
      </template>

      <el-menu-item-group>
        <el-menu-item index="/mongodb">mongodb</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template #title>
        <i class="el-icon-loading"></i>
        <span>易普优采</span>
      </template>

      <el-menu-item-group>
        <el-menu-item index="/epro/projects">项目列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="/vue3/features">Vue3</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="/vue2/features">Vue2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Sidebar',

  setup: () => {
    const isCollapse = ref(false)

    const handleOpen = (key: string, keyPath: string) => {
      isCollapse.value = true
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string) => {
      isCollapse.value = false
      console.log(key, keyPath)
    }

    return { isCollapse, handleOpen, handleClose }
  },
})
</script>

<style >
.el-menu {
  border: 1px #545c64 solid;
}
.el-menu-item {
  color: #fff;
}
.el-submenu__title {
  color: #fff;
}
</style>