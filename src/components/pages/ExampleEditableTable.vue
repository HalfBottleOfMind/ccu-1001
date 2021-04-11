<template>
  <div class="p-4">
    <Card title="Editable Table">
      <Table :items="data.items" :headers="data.headers" class="w-full">
        <template #row="{item}">
          <tr class="bg-gray even:bg-gray-dark">
            <td class="text-center px-4 py-2">
              {{item.name}}
            </td>
            <td class="text-center px-4 py-2">
              <Text v-model="item.email" @update="(data) => update('email', data, item)" class="flex-shrink" input-classes="bg-gray w-full" />
            </td>
            <td class="text-center px-4 py-2">
              <Text v-model="item.phone" @update="(data) => update('phone', data, item)" class="flex-shrink" input-classes="bg-gray w-full" />
            </td>
          </tr>
        </template>
      </Table>
    </Card>
  </div>
</template>

<script>
import {ref} from "vue";
import Card from "@/components/Card";
import Table from "@/components/visualize/Table";
import Text from "@/components/inputs/Text";

export default {
  name: "ExampleEditableTable",
  components: {Text, Table, Card},
  props: {
    modelValue: Object,
  },
  emits: ['update'],
  setup(props, {emit}) {
    const data = ref(props.modelValue)

    function update(field, newData, oldItem) {
      const itemIndex = data.value.items.indexOf(oldItem)

      data.value.items[itemIndex][field] = newData
      emit('update', data)
    }

    return {
      data,
      update,
    }
  }
}
</script>
