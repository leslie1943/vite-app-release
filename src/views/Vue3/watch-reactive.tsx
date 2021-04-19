import { defineComponent, reactive, watch } from 'vue'
// import { ElMessage } from 'element-plus'

const WatchReactive = defineComponent({
  setup() {
    const state = reactive({ count: 0 })
    watch(
      () => state.count, // 某个属性
      (newValue, oldValue) => {
        console.info(`WatchReactive oldValue:${oldValue}`)
        console.info(`WatchReactive newValue:${newValue}`)
      }
    )

    setTimeout(() => {
      state.count++
    }, 5000)

    return () => (
      <>
        <p>{state.count}</p>
      </>
    )
  },
})

export default WatchReactive
