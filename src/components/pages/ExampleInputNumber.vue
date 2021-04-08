<template>
  <div class="p-4">
    <Number
        label="First"
        v-model="data.first"
        @update="((data) => update('first', data))"
        class="mb-2"
    />
    <Number
        label="Second"
        v-model="data.second"
        @update="((data) => update('second', data))"
        class="mb-2 border-1 border-black rounded px-2 py-1"
        inputClasses="bg-gray text-white w-3/4 ml-4"
    />
    <Number
        v-model="data.third"
        @update="((data) => update('third', data))"
        class="mb-2 w-1/2"
        labelClasses="text-white"
        input-classes="w-full"
    />
  </div>
</template>

<script>
import Number from "@/components/inputs/Number";
import {ref} from "vue";
export default {
  name: "ExampleInputNumber",
  components: {Number},
  props: {
    modelValue: Object,
  },
  emits: ['update'],
  setup(props, {emit}) {
    const data = ref(props.modelValue)

    function update(field, newData) {
      data.value[field] = newData
      emit('update', data)
    }

    return {
      data,
      update,
    }
  }
}
</script>
