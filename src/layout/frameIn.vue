<template>
  <el-container>
    <el-aside width="200px"> <Sidebar /> </el-aside>
    <el-container></el-container>
    <el-main>
      <!-- 路由出口 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '@/components/Sidebar.vue'

export default defineComponent({
  name: 'FrameIn',
  components: { Sidebar },
})
</script>
<style scoped>
.el-header {
  background: #4b79a1;
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #fff;
}

.el-aside {
  color: #333;
  min-height: 100vh;
  background: #545c64;
}
</style>
