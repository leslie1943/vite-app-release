import { defineComponent, reactive, ref, toRaw } from 'vue'

const ToRaw = defineComponent({
  setup() {
    const obj = {
      name: 'leslie',
      age: 11,
    }
    const state = reactive(obj)
    const raw = toRaw(state)

    const refNum = ref({ num: 1943 })
    const rawNum = toRaw(refNum.value)

    const changeState = () => {
      state.age = 100
      console.info('obj', obj)
      console.info('state', state)
      console.info('raw', raw)
      console.info('raw==obj', raw == obj) // true
    }
    const changeObj = () => {
      obj.age = 99
      console.info('obj', obj)
      console.info('state', state)
      console.info('raw', raw)
      console.info('raw==obj', raw == obj) // true
    }

    const changeRefNumber = () => {
      refNum.value.num = 1989
      console.info('refNum', refNum)
      console.info('rawNum', rawNum)
    }
    const changeRawNumber = () => {
      rawNum.num = 2046
      console.info('refNum', refNum) // efImpl {_rawValue: {…}, _shallow: false, __v_isRef: true, _value: Proxy}
      console.info('rawNum', rawNum) // {num: 2046}
    }

    return () => (
      <>
        <p>toRaw方法用于获取ref和reactive对象的原始数据的</p>
        <p>{state.age}</p>
        <p>{state.name}</p>
        <p>refNum: {refNum.value.num}</p>
        <el-button onClick={changeState}>change State</el-button>
        <el-button onClick={changeObj}>change Obj</el-button>
        <el-button onClick={changeRefNumber}>change Ref Number</el-button>
        <el-button onClick={changeRawNumber}>change Raw Number</el-button>
      </>
    )
  },
})
export default ToRaw
