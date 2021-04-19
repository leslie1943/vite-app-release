import { defineComponent, ref, watch } from 'vue'
// import { ElMessage } from 'element-plus'

const WatchRef = defineComponent({
  setup() {
    const state = ref(0)

    // 返回 stop, 停止监听
    const stopWatch = watch(state, (newValue, oldValue) => {
      console.info(`WatchRef oldValue:${oldValue}`)
      console.info(`WatchRef newValue:${newValue}`)
    })

    setInterval(() => {
      state.value++
      if (state.value > 5) {
        stopWatch()
      }
    }, 1000)

    return () => (
      <>
        <p>{state.value}</p>
      </>
    )
  },
})

export default WatchRef
