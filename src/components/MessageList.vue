<template>
  <ul>
    <li v-for="message in messages" :key="message">
      {{ message }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MessageList',
  props: {
    messages: {
      type: Array,
    },
  },
})
</script>

<style scoped>
</style>
