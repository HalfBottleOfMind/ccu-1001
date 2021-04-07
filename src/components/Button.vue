<template>
  <div class="py-2 px-4 rounded-sm text-black bg-main cursor-pointer flex items-center text-center" @click="callback()">
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
