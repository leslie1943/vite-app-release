<template>
  <p>Shallow reactive</p>
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
    // 将 obj 对象中第一层的数据转换为reactive的.
    const state = shallowReactive(obj)
    console.info('state', state)
    console.info('state', state.first)
    console.info('state', state.first.second)
    /**
     * 打印结果:
     * Proxy {a: 1, first: {…}}
     * {b: 2, second: {…}}
     * {c: 3}
     */
  }
}
</script>
