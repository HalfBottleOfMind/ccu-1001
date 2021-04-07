<template>
  <div class="p-4">
    <Card title="Save data example">
      <input name="email" v-model="contacts.email" @input="update()" class="bg-gray block mb-2">
      <input name="email" v-model="contacts.phone" @input="update()" class="bg-gray">
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
// import {ref} from "vue";
export default {
  name: "ExampleSaveData",
  components: {Card},
  props: {
    modelValue: Object
  },
  setup(props, {emit}) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const contacts = props.modelValue

    function update() {
      emit('update', contacts)
    }

    return {
      contacts,
      update,
    }
  }
}
</script>
