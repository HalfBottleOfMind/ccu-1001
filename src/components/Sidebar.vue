<template>
 <div id="nav" class="bg-gray p-4 w-1/6 min-w-300">
   <NavigateButton
       @click="$emit('navigate', 'example tabs')"
       :active="currentPage === 'example tabs'"
   >
     Example Tabs
   </NavigateButton>
   <NavigateButton
       @click="$emit('navigate', 'example cards')"
       :active="currentPage === 'example cards'"
   >
     Example Cards
   </NavigateButton>
   <NavigateButton
       @click="$emit('navigate', 'example save data')"
       :active="currentPage === 'example save data'"
   >
     Example Save Data
   </NavigateButton>
   <NavigateButton
       @click="$emit('navigate', 'example table')"
       :active="currentPage === 'example table'"
   >
     Example Table
   </NavigateButton>
   <NavigateButton
       @click="$emit('navigate', 'example bars')"
       :active="currentPage === 'example bars'"
   >
     Example Bars
   </NavigateButton>
   <NavigateButton
       @click="$emit('navigate', 'example input text')"
       :active="currentPage === 'example input text'"
   >
     Example Input Text
   </NavigateButton>
 </div>
</template>

<script>
import NavigateButton from "@/components/NavigateButton";
export default {
  name: "Sidebar",
  components: { NavigateButton },
  emits: [
    'navigate',
  ],
  props: {
    currentPage: String,
  },
  setup() {

  }
}
</script>
