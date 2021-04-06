<template>
  <div class="py-2 px-4 rounded-sm text-black bg-main" @click="callback()">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    callback: Function,
  }
}
</script>
