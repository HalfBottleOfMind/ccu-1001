<template>
  <div class="p-4">
    <Table :items="items" :headers="headers" class="w-full"/>
    <Table :items="items" :headers="headers" class="w-2/3 mt-4"/>
  </div>
</template>

<script>
import Table from "@/components/visualize/Table";

export default {
  name: "ExampleTable",
  components: {Table},
  setup() {
    const items = [
      {
        name: 'name 1',
        email: 'email 1',
        phone: 'phone 1',
      },
      {
        email: 'email 2',
        phone: 'phone 2',
        name: 'name 2',
      },
      {
        phone: 'phone 3',
        name: 'name 3',
        email: 'email 3',
      },
    ]
    const headers = [
      {
        name: 'Имя',
        value: 'name',
      },
      {
        name: 'Почта',
        value: 'email',
      },
      {
        name: 'Телефон',
        value: 'phone',
      },
    ]

    return {
      items,
      headers,
    }
  }
}
</script>
