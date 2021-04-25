import { defineComponent } from 'vue'

const PropsDemo = defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    console.info('context attrs', context.attrs)
    console.info('context slots', context.slots)
    console.info('context emit', context.emit)
    return () => <>{props.title}</>
  },
})

export default PropsDemo
