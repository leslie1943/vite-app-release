<template>
  <div v-loading="loading">
    <el-button type="primary" @click="onLogin">测试登录 </el-button>
    <el-divider></el-divider>
    <el-button type="primary" @click="listRegions">获取区域 </el-button>
    <el-divider></el-divider>
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
    <el-button type="primary" @click="listGroups">获取Groups </el-button>
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
import apiEpro from '../api/epro'

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

    // 获取 EPRO Regions
    const listRegions = async () => {
      const { data } = await apiEpro.getRegions()
      console.info('regions res', data.result)
    }

    const onLogin = async () => {
      const { data } = await apiEpro.login()
      console.info('Login res', data)
      window.localStorage.setItem('Authorization', data.result.token)
    }

    // 获取
    const listResps = async () => {
      loading.value = true
      const res = await apiProject.getProjects()
      repositories.value = res.data
      loading.value = false
    }

    // 获取
    const listGroups = async () => {
      loading.value = true
      const res = await apiGroup.getGroups()
      groups.value = res.data
      loading.value = false
    }

    return {
      count,
      loading,
      repositories,
      listResps,
      listGroups,
      groups,
      listRegions,
      onLogin,
    }
  },
})
</script>

<style scoped>
</style>
