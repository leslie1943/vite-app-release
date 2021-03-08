<template>
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item index="/">
      <i class="el-icon-house"></i>
      <template #title>首页</template>
    </el-menu-item>

    <el-submenu index="1">
      <template #title>
        <i class="el-icon-ship"></i>
        <span>Gitlab 操作</span>
      </template>

      <el-menu-item-group>
        <el-menu-item index="/">选项1</el-menu-item>
        <el-menu-item index="/">选项2</el-menu-item>
        <el-menu-item index="/">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="2">
      <template #title>
        <i class="el-icon-sugar"></i>
        <span>Jenkins 操作</span>
      </template>

      <el-menu-item-group>
        <el-menu-item index="/">选项1</el-menu-item>
        <el-menu-item index="/">选项2</el-menu-item>
        <el-menu-item index="/">选项3</el-menu-item>
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
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string) => {
      console.log(key, keyPath)
    }

    return { isCollapse, handleOpen, handleClose }
  },
})
</script>

<style scoped>
.el-menu {
  border: 1px #545c64 solid;
}
</style>