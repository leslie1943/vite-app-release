import { defineComponent, provide, reactive } from 'vue'
import ProvideInjectDeep1 from './ProvideInjectDeep1.tsx'

const ProvideInject = defineComponent({
  components: { ProvideInjectDeep1 },
  setup() {
    const obj = {
      name: 'leslie',
      age: 12,
    }

    const reactiveObj = reactive(obj)
    // 向子组件以及子孙组件传递名为 info 的数据
    provide('provideInfo', reactiveObj)

    const change = () => {
      reactiveObj.name = 'changed leslie'
    }

    return () => (
      <>
        <p>root component {JSON.stringify(obj)}</p>
        <p>
          <el-button onClick={change}>change name</el-button>
        </p>
        <ProvideInjectDeep1 />
      </>
    )
  },
})

export default ProvideInject
