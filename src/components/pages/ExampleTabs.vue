<template>
  <div class="p-4">
    <Tabs :options="{ useUrlFragments: false }">
      <Tab name="first">
        <div class="p-4">
          First content
        </div>
      </Tab>
      <Tab name="second">
        <div class="p-4">
          Second Content
        </div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import {Tabs, Tab} from 'vue3-tabs-component'

export default {
  name: "ExampleTabs",
  components: {
    Tabs,
    Tab,
  }
}
</script>
