<template>
  <p>{{ state1 }}</p>
  <el-button type="primary" @click="add1">增加 for ref</el-button>

  <p>{{ state2 }}</p>
  <el-button type="danger" @click="add2">增加 for toRef</el-button>
</template>

<script>
import { ref, toRef } from 'vue'
export default {
  setup() {
    const obj1 = { count: 3 }
    const obj2 = { count: 3 }
    const state1 = ref(obj1.count)
    const state2 = toRef(obj2, 'count')

    function add1() {
      state1.value++
      console.log('obj1原始值：', obj1);
      console.log('state1响应式数据对象：', state1);
    }

    function add2() {
      state2.value++
      console.log('obj2原始值：', obj2);
      console.log('state2响应式数据对象：', state2);
    }

    return { state1, state2, add1, add2 }
  }
}
</script>
