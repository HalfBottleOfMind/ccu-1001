<template>
  <div
      class="bg-gray-dark mb-2 py-2 pr-4 rounded-sm cursor-pointer"
      :class="{ 'border-l-4 border-main text-main pl-3': active, 'text-white pl-4 hover:bg-gray-light' : !active }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "NavigateButton",
  props: {
    active: Boolean
  }
}
</script>
