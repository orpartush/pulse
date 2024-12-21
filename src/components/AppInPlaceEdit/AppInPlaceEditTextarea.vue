<script setup lang="ts">
const value = defineModel<string>()
defineEmits(['commit'])
</script>

<template>
  <textarea
    class="w-full bg-transparent focus:outline-none focus:border-radius focus:bg-gray-800 focus:rounded-md"
    v-model="value"
    @blur="$emit('commit')"
  />
</template>
