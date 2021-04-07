<template>
  <div class="bg-gray-dark text-white p-5 relative">
    <span class="bg-gray-dark absolute top-2 left-9 px-1">{{ title }}</span>
    <div class="border-2 border-gray-light p-5">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>
