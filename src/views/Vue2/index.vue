<template>
  <div class="project-wrapper">
    <h1>作用域插槽 绑定在元素上的属性 ===> 插槽Prop</h1>
    <h2>
      <span style="color: #ff0000">slotProps</span>
      是子组件做作用域插槽元素上传递的属性
    </h2>
    <SlotContext>
      <!--  插槽写法 #default  -->
      <template #default="props">
        <h3 style="color: #ffaf40">父组件: default 默认作用域插槽</h3>
        <h4>使用方式 - 子组件中: &lt; slot :slotProps="defaultObj" &gt;</h4>
        <h4>使用方式 - 父组件中: &lt; template #default="props" &gt;</h4>
        <h3 style="color: #409eff">{{ props.slotProps }}</h3>
      </template>

      <!--  具名插槽: 插槽写法 #title  -->
      <template #title="props">
        <el-divider />
        <h3 style="color: #ffaf40">父组件 具名的作用域插槽使用 #title</h3>
        <h4>
          使用方式 - 子组件中: &lt; slot name="title" :slotProps="titleObj" &gt;
        </h4>
        <h4>使用方式 - 父组件中: &lt;template #title="props"&gt;</h4>
        <h3 style="color: #409eff">
          v-slot:title="props" {{ props.slotProps }}
        </h3>
      </template>

      <!--  插槽写法 v-slot:  -->
      <template v-slot:item="props">
        <el-divider />
        <h3 style="color: #ffaf40">
          父组件:item 具名的作用域插槽, 使用v-slot:
        </h3>
        <h4>
          使用方式 - 子组件中: &lt; slot name="item" :slotProps="itemObj" &gt;
        </h4>
        <h4>使用方式 - 父组件中: &lt;template v-slot:item="props"&gt;</h4>
        <h3 style="color: #409eff">
          v-slot:item="props" => {{ props.slotProps }}
        </h3>
      </template>

      <!--  插槽写法 v-slot:  -->
      <template v-slot:other="props">
        <el-divider />
        <h3 style="color: #ffaf40">
          父组件: other 具名的作用域插槽 v-slot:other
        </h3>
        <h4>
          使用方式 - 子组件中: &lt; name="other" :slotProps="otherObj" &gt;
        </h4>
        <h4>使用方式 - 父组件中: &lt;template v-slot:other="props" &gt;</h4>
        <h3 style="color: #409eff">
          v-slot:other="props" => {{ props.slotProps }}
        </h3>
        <!-- 💛 输出结果: { company: 'ibm', id: '1983' } -->
      </template>
    </SlotContext>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlotContext from './Slot-Context.vue'
export default defineComponent({
  name: 'Home',
  components: {
    SlotContext,
  },
  setup: () => {},
})
</script>
