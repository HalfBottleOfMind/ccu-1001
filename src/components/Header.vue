<template>
  <div class="bg-gray-dark text-white p-4 flex items-center">
    <Logo class="h-16 w-16" />
    <span class="ml-4 text-xl">Устройство мониторинга и управления CCU-1001</span>
    <div class="ml-auto flex items-center">
      <Button :callback="() => $emit('saveChanges')" v-if="hasUnsavedChanges">Сохранить изменения</Button>
      <Button :callback="() => $emit('resetChanges')" v-if="hasUnsavedChanges" class="mx-2">Отменить изменения</Button>
      <Button :callback="() => $emit('logout')">Выйти</Button>
    </div>
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
  emits: ['logout', 'saveChanges', 'resetChanges'],
  props: {
    hasUnsavedChanges: {
      type: Boolean
    }
  }
}
</script>