<template>
  <div class="flex items-center justify-between">
    <span :class="labelClasses">{{ label }}</span>
    <input type="number" v-model="value" @input="update" class="flex py-2 px-4 outline-none rounded border-1 border-main" :class="inputClasses" />
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Number",
  props: {
    modelValue: String,
    label: String,
    labelClasses: String,
    inputClasses: String,
  },
  emits: ['update'],
  setup(props, {emit}) {
    const value = ref(props.modelValue)

    function update() {
      emit('update', value)
    }

    return {
      value,
      update,
    }
  }
}
</script>
