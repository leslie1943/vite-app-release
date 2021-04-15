<template>
  <div class="project-wrapper">
    <el-divider>子组件触发事件</el-divider>
    <Child name="Name from parent" @change="changeEvent" />
    <el-divider>To Ref / ToRef</el-divider>
    <RefDemo />
    <el-divider>ToRefs</el-divider>
    <ToRefs />
    <el-divider>ShallowReactive-reactive state</el-divider>
    <ShallowReactiveSecond />
    <el-divider>ShallowReactive-shallowReactive state</el-divider>
    <ShallowReactiveOne />
    <el-divider>ShallowReactive-change</el-divider>
    <ShallowReactiveChange />
    <el-divider>ShallowRef-change</el-divider>
    <ShallowRef />
    <el-divider>TriggerRef-change</el-divider>
    <ShallowRefTriggerRef />
    <el-divider>MarkRaw</el-divider>
    <MarkRaw />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import Child from './child.vue'
import RefDemo from './ref-toRef.vue'
import ToRefs from './toRefs.vue'
import ShallowReactiveSecond from './shallowReactiveSecond.vue'
import ShallowReactiveOne from './shallowReactiveOne.vue'
import ShallowReactiveChange from './shallowReactiveChange.vue'
import ShallowRef from './shallowRef.vue'
import ShallowRefTriggerRef from './shallowRefTriggerRef.vue'
import MarkRaw from './markRaw.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Child,
    RefDemo,
    ToRefs,
    ShallowReactiveSecond,
    ShallowReactiveOne,
    ShallowReactiveChange,
    ShallowRef,
    ShallowRefTriggerRef,
    MarkRaw,
  },
  setup: () => {
    const count = ref(0)
    function changeEvent(val: string) {
      console.info('val from child:', val)
    }
    return { count, changeEvent }
  },
})
</script>
