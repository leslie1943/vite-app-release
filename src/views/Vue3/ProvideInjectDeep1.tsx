import { defineComponent, inject } from 'vue'

import ProvideInjectDeep2 from './ProvideInjectDeep2.tsx'
const ProvideInjectDeep1 = defineComponent({
  components: { ProvideInjectDeep2 },
  setup() {
    const obj = {
      name: 'leslie',
      age: 12,
    }
    // 向子组件以及子孙组件传递名为 info 的数据
    const deep1Info = inject('provideInfo')

    return () => (
      <>
        <p>deep 1 component: {JSON.stringify(deep1Info)}</p>
        <ProvideInjectDeep2 />
      </>
    )
  },
})

export default ProvideInjectDeep1
