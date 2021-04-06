<template>
 <div class="bg-gray p-4 w-1/6 min-w-300">
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
