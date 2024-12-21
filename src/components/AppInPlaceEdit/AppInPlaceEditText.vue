<script setup lang="ts">
const value = defineModel()
defineEmits(['commit'])
</script>

<template>
  <input
    class="w-full bg-transparent focus:outline-none focus:border-radius focus:bg-gray-800 focus:rounded-md"
    type="text"
    v-model="value"
    @blur="$emit('commit')"
    @keyup.enter="($event.target as HTMLInputElement).blur()"
  />
</template>
