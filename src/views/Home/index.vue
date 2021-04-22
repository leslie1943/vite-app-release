<template>
  <HelloWorld msg="Test props" />
  <MessageList :messages="list" />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import HelloWorld from '../../components/HelloWorld.vue'
import MessageList from '../../components/MessageList.vue'
export default defineComponent({
  name: 'Home',
  components: { HelloWorld, MessageList },
  props: {},
  setup: () => {
    const count = ref(0)
    const list = ['Hey John', 'Howdy Paco']
    return { count, list }
  },
})
</script>

