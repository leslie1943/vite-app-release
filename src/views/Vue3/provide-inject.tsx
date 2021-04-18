import { defineComponent, provide } from 'vue'
import ProvideInjectDeep1 from './ProvideInjectDeep1.tsx'

const ProvideInject = defineComponent({
  components: { ProvideInjectDeep1 },
  setup() {
    const obj = {
      name: 'leslie',
      age: 12,
    }
    // 向子组件以及子孙组件传递名为 info 的数据
    provide('provideInfo', obj)

    return () => (
      <>
        <p>root component {JSON.stringify(obj)}</p>
        <ProvideInjectDeep1 />
      </>
    )
  },
})

export default ProvideInject
