<template>
  <p>state.a:{{ state.a }}</p>
  <p>state.first.b:{{ state.first.b }}</p>
  <p>state.first.second.c:{{ state.first.second.c }}</p>
  <el-button type="primary" @click="changeLevel1">changeLevel1</el-button>
  <el-button type="primary" @click="changeLevel2">changeLevel2</el-button>
</template>

<script>
import { shallowReactive } from 'vue'
export default {
  setup() {
    const obj = {
      a: 1,
      first: {
        b: 2,
        second: {
          c: 3
        }
      }
    }
    // 将 obj 对象中所有的属性值都转换为响应式数据
    const state = shallowReactive(obj)

    function changeLevel1() {
      state.a = 1943
    }

    function changeLevel2() {
      state.first.b = 2002
      state.first.second.c = 2046
      console.info(state)
    }

    return {
      state, changeLevel1, changeLevel2
    }
  }
}
</script>
