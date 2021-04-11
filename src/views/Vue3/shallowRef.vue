<template>
  <p>{{ state.a }}</p>
  <p>{{ state.first.b }}</p>
  <p>{{ state.first.second.c }}</p>

  <el-button @click="change1">Change 1</el-button>
  <el-button @click="change2">Change 2</el-button>
</template>

<script>
import { shallowRef, defineComponent } from 'vue'
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

    function change1() {
      // 直接将 state.value重新赋值
      state.value = {
        a: 7,
        first: {
          b: 8,
          second: {
            c: 9
          }
        }
      }
      console.info('change1', state)

    }

    function change2() {
      state.value.a = 11
      state.value.first.b = 12
      state.value.first.second.c = 13
      console.info('change2', state)
    }

    return {
      state,
      change1,
      change2
    }
  }
});
</script>
<style lang="scss" scoped>
// .wrapper {
// }
</style>