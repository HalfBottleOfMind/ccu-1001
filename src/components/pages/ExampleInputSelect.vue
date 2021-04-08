<template>
  <div class="p-4">
    <Select
      label="First"
      v-model="data.first"
      :items="items"
      @update="((data) => update('first', data))"
      class="mb-2"
    />
    <Select
      label="Second"
      v-model="data.second"
      :items="items"
      @update="((data) => update('second', data))"
      class="mb-2"
      inputClasses="bg-gray text-white w-3/4 ml-4"
    />
    <Select
      v-model="data.third"
      :items="items"
      @update="((data) => update('third', data))"
      class="mb-2 w-1/2"
      inputClasses="w-full"
      labelClasses="text-white"
    />
  </div>
</template>

<script>
import Select from "@/components/inputs/Select";
import {ref} from "vue";

export default {
  name: "ExampleInputSelect",
  components: {Select},
  props: {
    modelValue: Object,
  },
  emits: ['update'],
  setup(props, {emit}) {
    const data = ref(props.modelValue)
    const items = [
      'first option',
      'second option',
      'third option',
      'fourth option',
    ]

    function update(field, newData) {
      data.value[field] = newData
      emit('update', data)
    }

    return {
      data,
      update,
      items,
    }
  }
}
</script>
