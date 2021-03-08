<template>
  <div v-loading="loading">
    <!-- <el-button type="danger" @click="count++">count is: {{ count }}</el-button> -->
    <el-button type="primary" @click="listResps">获取EPRO仓库 </el-button>
    <el-divider></el-divider>
    <el-table border :data="repositories">
      <el-table-column label="id" prop="id"></el-table-column>
      <el-table-column label="name" prop="name"></el-table-column>
      <el-table-column label="description" prop="description"></el-table-column>
      <el-table-column label="path" prop="path"></el-table-column>
      <el-table-column
        label="http_url_to_repo"
        prop="http_url_to_repo"
      ></el-table-column>
      <el-table-column label="visibility" prop="visibility"></el-table-column>
    </el-table>
    <el-divider></el-divider>
    <el-button type="primary" @click="getGroups">获取Groups </el-button>
    <el-divider></el-divider>
    <el-table border :data="groups">
      <el-table-column label="Group id" prop="id"></el-table-column>
      <el-table-column
        label="Group parent id"
        prop="parent_id"
      ></el-table-column>
      <el-table-column
        label="Group description"
        prop="description"
      ></el-table-column>
      <el-table-column label="Group path" prop="path"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import apiProject from '../api/project'
import apiGroup from '../api/group'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0)
    const loading = ref(false)
    const repositories = ref()
    const groups = ref()

    // 获取
    const listResps = async () => {
      loading.value = true
      const res = await apiProject.getProjects()
      repositories.value = res
      loading.value = false
    }

    // 获取
    const getGroups = async () => {
      loading.value = true
      const res = await apiGroup.getGroups()
      groups.value = res
      loading.value = false
    }

    return { count, loading, repositories, listResps, getGroups, groups }
  },
})
</script>

<style scoped>
</style>
