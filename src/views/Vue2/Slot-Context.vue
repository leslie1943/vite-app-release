<template>
  <div class="new-slot">
    <slot :slotProps="defaultObj"></slot>
    <slot name="title" :slotProps="titleObj"></slot>
    <slot name="item" :slotProps="itemObj"></slot>
    <slot name="other" :slotProps="otherObj"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'Slot-Context',
  components: {},
  setup: () => {
    const defaultObj = reactive({ team: 'Liverpool', member: 'Steve Gerrard' })
    const titleObj = reactive({ name: 'leslie', love: 'javascript' })
    const itemObj = reactive({ height: 110, width: 220 })
    const otherObj = reactive({ company: 'ibm', id: '1983' })

    return {
      defaultObj,
      titleObj,
      itemObj,
      otherObj,
    }
  },
})
</script>
<style lang="scss">
.new-slot {
  border: 1px solid gray;
  padding: 20px;
}
</style>