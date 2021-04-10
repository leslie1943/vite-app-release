<template>
  <p>Shallow reactive</p>
</template>

<script>
import { reactive } from 'vue'
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
    const state = reactive(obj)
    console.info('state', state)
    console.info('state', state.first)
    console.info('state', state.first.second)
    /**
     * 打印结果:
     * Proxy {a: 1, first: {…}}
     * Proxy {b: 2, second: {…}}
     * Proxy {c: 3}
     */
  }
}
</script>
