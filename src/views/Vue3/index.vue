<template>
  <div class="project-wrapper">
    <el-divider>子组件触发事件</el-divider>
    <Child name="Name from parent" @change="changeEvent" />
    <el-divider>To Ref / ToRef</el-divider>
    <RefDemo />
    <el-divider>ToRefs</el-divider>
    <ToRefs />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import Child from './child.vue'
import RefDemo from './ref-toRef.vue'
import ToRefs from './toRefs.vue'
export default defineComponent({
  name: 'Home',
  components: { Child, RefDemo, ToRefs },
  setup: () => {
    const count = ref(0)
    function changeEvent(val: string) {
      console.info('val from child:', val)
    }
    return { count, changeEvent }
  },
})
</script>
