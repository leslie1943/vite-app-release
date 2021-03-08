<template>
  <HelloWorld />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import HelloWorld from '../../components/HelloWorld.vue'
export default defineComponent({
  name: 'Home',
  components: { HelloWorld },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0)
    return { count }
  },
})
</script>

