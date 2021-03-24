<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: 24px">供端平台</span>
              <el-button class="button" type="text">操作按钮</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: 24px">供端平台</span>
              <el-button class="button" type="text">操作按钮</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import HelloWorld from '../../components/HelloWorld.vue'
export default defineComponent({
  name: 'Home',
  components: { HelloWorld },
  props: {},
  setup: () => {
    const count = ref(0)
    return { count }
  },
})
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin: 20px;
  /* width: 480px; */
}
</style>