import { defineComponent, reactive, watch } from 'vue'

const WatchMultiple = defineComponent({
  setup() {
    const state = reactive({ count: 0, name: 'leslie' })
    watch(
      [() => state.count, () => state.name], // 监听多个属性, 数组格式
      // 回调参数的格式 数组格式: [newVal1,newVal2], [oldVal1,oldVal2]
      ([newCount, newName], [oldCount, oldName]) => {
        console.info(`WatchMultiple old count:${oldCount}`)
        console.info(`WatchMultiple new count:${newCount}`)
        console.info(`WatchMultiple old name:${oldName}`)
        console.info(`WatchMultiple new name:${newName}`)
      }
    )

    setTimeout(() => {
      state.count++
      state.name = state.count + 's'
    }, 5000)

    return () => (
      <>
        <p>{state.count}</p>
        <p>{state.name}</p>
      </>
    )
  },
})

export default WatchMultiple
