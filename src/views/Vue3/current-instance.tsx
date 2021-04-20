import { defineComponent, getCurrentInstance, ref } from 'vue'

const CurrentInstance = defineComponent({
  setup() {
    const num = ref(3)
    const that = getCurrentInstance()
    console.info('instance', that)
    console.info('instance ctx', (that as any).ctx)
    console.info('instance proxy', (that as any).proxy)
    // 断言
    ;(that as any).ctx.$message.success('OK')

    return () => (
      <>
        <p>{num.value}</p>
      </>
    )
  },
})

export default CurrentInstance
