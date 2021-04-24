<template>
  <div class="Input">子组件: <el-input @input="first" v-model="name" /></div>
</template>

<script >
import { defineComponent } from "vue";
export default defineComponent({
  name: 'Input',
  props: {
    title: {
      type: String,
      default: () => "suzhen"
    }
  },
  data() {
    return {
      name: ''
    }
  },

  methods: {
    first() {
      this.$emit("update:title", this.name)
    }
  },
  mounted() {
    this.name = this.title
  }
})
</script>
<style lang="scss">
.Input {
  display: flex;
}
</style>