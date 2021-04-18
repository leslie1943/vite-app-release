import { defineComponent, inject } from 'vue'

const ProvideInjectDeep2 = defineComponent({
  setup() {
    const obj = {
      name: 'leslie',
      age: 12,
    }
    // 向子组件以及子孙组件传递名为 info 的数据
    const deep2Info = inject('provideInfo')

    return () => (
      <>
        <p>deep 2 component: {JSON.stringify(deep2Info)}</p>
      </>
    )
  },
})

export default ProvideInjectDeep2
