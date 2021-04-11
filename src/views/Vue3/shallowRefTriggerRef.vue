<template>
  <p>{{ state.a }}</p>
  <p>{{ state.first.b }}</p>
  <p>{{ state.first.second.c }}</p>

  <el-button @click="change">Change by triggerRef</el-button>
</template>

<script>
import { shallowRef, defineComponent, triggerRef } from 'vue'
export default defineComponent({
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
    const state = shallowRef(obj)
    console.info('shallowRef state', state)



    function change() {
      state.value.a = 11
      state.value.first.b = 12
      state.value.first.second.c = 13
      // 修改后立即驱动更新视图
      triggerRef(state)
      console.info('change', state)
    }

    return {
      state,
      change,
    }
  }
});
</script>
<style lang="scss" scoped>
// .wrapper {
// }
</style>