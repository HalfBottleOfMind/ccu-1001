<template>
    <table class="text-white">
      <thead>
        <tr class="bg-gray-dark">
          <th v-for="(item, index) in headers" :key="index" class="border-1 border-main px-4 py-2">
            {{ item.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index" class="bg-gray even:bg-gray-dark">
          <td v-for="(field, fieldIndex) in headers" :key="fieldIndex" class="text-center px-4 py-2">
            {{ item[field.value] }}
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    items: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  }
}
</script>
