<template>
  <div class="project-wrapper">
    <div style="font-size: 14px">
      {{ name }}
      <el-button type="primary" @click="onClick"
        >Child Emit event To Parent</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'Home',
  props: { name: String },
  setup: (props, context) => {
    console.info('props', props)
    console.info('props', props.name)
    console.info('context', context)

    const count = ref(0)

    // 子组件触发事件给父组件
    function onClick() {
      context.emit('change', 'value of child')
    }
    return { onClick }
  },
})
</script>
