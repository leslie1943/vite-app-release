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
    <el-divider>ToRaw</el-divider>
    <ToRaw />
    <el-divider>ProvideInject</el-divider>
    <ProvideInject />
    <el-divider>Watch Ref</el-divider>
    <WatchRef />WatchReactive
    <el-divider>Watch Reactive</el-divider>
    <WatchReactive />
    <el-divider>Watch Multipe </el-divider>
    <WatchMultipe />
    <el-divider>Watch Effect </el-divider>
    <WatchEffect />
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
import ToRaw from './toRaw.tsx'
import ProvideInject from './provide-inject.tsx'
import WatchRef from './watch-ref.tsx'
import WatchReactive from './watch-reactive.tsx'
import WatchMultipe from './watch-multipe.tsx'
import WatchEffect from './watch-effect'
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
    ToRaw,
    ProvideInject,
    WatchRef,
    WatchReactive,
    WatchMultipe,
    WatchEffect,
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
