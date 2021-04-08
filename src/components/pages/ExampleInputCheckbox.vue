<template>
  <div class="p-4">
    <Checkbox
        label="First"
        v-model="data.first"
        @update="((data) => update('first', data))"
        class="mb-2"
    />
    <Checkbox
        label="Second"
        v-model="data.second"
        @update="((data) => update('second', data))"
        class="mb-2"
        inputClasses="bg-gray text-white w-3/4 ml-4"
    />
    <Checkbox
        v-model="data.third"
        @update="((data) => update('third', data))"
        class="mb-2 w-6"
        labelClasses="text-white"
    />
  </div>
</template>

<script>
import Checkbox from "@/components/inputs/Checkbox";
import {ref} from "vue";

export default {
  name: "ExampleInputCheckbox",
  components: {Checkbox},
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
