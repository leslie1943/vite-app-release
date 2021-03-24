<template>
  <div v-loading="loading">
    <div class="color">
      请先启动 【 MongoDB服务】 和 【 本地服务 node-mongodb-article 】
    </div>
    <el-button type="primary" @click="listArticles">获取 Articles </el-button>
    <el-divider />
    <el-table border :data="artciles">
      <el-table-column label="ID" prop="_id"></el-table-column>
      <el-table-column label="Title" prop="title"></el-table-column>
      <el-table-column label="Body" prop="body"></el-table-column>
      <el-table-column label="Description" prop="description"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { getArticles } from '../../api/mongodb'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'MongoDB',
  props: {},
  setup: () => {
    const loading = ref(false)
    const artciles = ref([])
    const articlesCount = ref(0)

    const listArticles = async () => {
      loading.value = true
      try {
        const ret = await getArticles()
        artciles.value = ret.data.articles
        articlesCount.value = ret.data.articlesCount
        ElMessage.success('查询成功')
      } catch (error) {
        ElMessage.success(error.toString())
      } finally {
        loading.value = false
      }
    }
    return { loading, listArticles, artciles, articlesCount }
  },
})
</script>

<style lang="scss" scoped>
.color {
  margin-bottom: 10px;
  color: $color-required;
}
</style>
