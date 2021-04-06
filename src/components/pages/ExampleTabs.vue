<template>
  <div class="p-4">
    <Tabs :options="{ useUrlFragments: false }">
      <Tab name="first">
        First content
      </Tab>
      <Tab name="second">
        Second Content
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import { Tabs, Tab } from 'vue3-tabs-component'

export default {
  name: "ExampleTabs",
  components: {
    Tabs,
    Tab,
  }
}
</script>
