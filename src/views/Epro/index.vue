<template>
  <div class="project-wrapper">
    <el-row>
      <el-col
        v-for="project in projects"
        :key="project.name"
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        :xl="6"
      >
        <el-card class="box-card">
          <template #header>
            <div class="card-header test">
              <span style="font-size: 24px">{{ project.name }}</span>
              <el-button class="button" type="text">操作按钮</el-button>
            </div>
          </template>
          <div class="text item">
            <el-link type="primary" :href="project.test">develop 环境</el-link>
          </div>

          <div class="text item">
            <el-link type="primary" :href="project.staging"
              >staging 环境</el-link
            >
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="svg-con">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zixunfenxiang" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-lansetanhao" />
      </svg>
    </div>
    <Child name="苏慕舟" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import projects from '../../data/project'
import Child from './child.vue'
export default defineComponent({
  name: 'Home',
  components: { Child },
  setup: () => {
    const count = ref(0)
    return { count, projects }
  },
})
</script>

<style lang="scss" scoped>
.project-wrapper {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :deep(.el-card__header) {
    background: darkcyan;
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

  .svg-con {
    width: 100%;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>