<template>
  <div class="project-wrapper">
    <div style="font-size: 14px">{{ name }}</div>
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
  },
})
</script>
