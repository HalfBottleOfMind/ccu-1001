<template>
  <div class="bg-gray-dark text-white p-4 flex items-center">
    <Logo class="h-16 w-16" />
    <span class="ml-4 text-xl">Устройство мониторинга и управления CCU-1001</span>
    <Button :callback="() => $emit('loggedOut')" class="ml-auto">Выйти</Button>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Button from '@/components/Button'

export default {
  name: "Header",
  components: {
    Logo,
    Button,
  },
  emits: ['loggedOut']
}
</script>