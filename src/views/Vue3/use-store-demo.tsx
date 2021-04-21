import { defineComponent } from 'vue'
import { useStore } from 'vuex'

const UseStroeDemo = defineComponent({
  setup() {
    const store = useStore()
    console.info(store)

    return () => (
      <>
        <p>{JSON.stringify(store)}</p>
        <p>store.state.num: {store.state.num}</p>
      </>
    )
  },
})

export default UseStroeDemo
