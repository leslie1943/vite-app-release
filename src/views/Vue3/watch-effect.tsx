import { defineComponent, watchEffect, reactive } from 'vue'

const WatchEffectDemo = defineComponent({
  setup() {
    const state = reactive({ count: 0, name: 'leslie' })

    watchEffect(() => {
      console.info(state.count)
      console.info(state.name)
      /**
       * 初始化打印: 0, 0-name
       * 1秒后打印:  1, 1-name
       */
    })

    setTimeout(() => {
      state.count++
      state.name = state.count + '-name'
    }, 1000)

    return () => (
      <>
        <p>{state.count}</p>
        <p>{state.name}</p>
      </>
    )
  },
})

export default WatchEffectDemo
