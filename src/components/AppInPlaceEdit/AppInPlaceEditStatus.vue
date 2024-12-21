<script setup lang="ts">
const value = defineModel<'in-progress' | 'completed'>()
const emit = defineEmits(['commit'])
const { readonly = false } = defineProps<{ readonly?: boolean }>()

const toggleValue = () => {
  if (readonly) return
  value.value = value.value === 'in-progress' ? 'completed' : 'in-progress'
  emit('commit')
}
</script>
<template>
  <div class="text-2xl cursor-pointer" @click="toggleValue">
    <Transition mode="out-in"
      ><iconify-icon
        icon="lucide:circle-check"
        v-if="value === 'completed'"
        class="text-green-500" />
      <iconify-icon icon="lucide:circle-dot" v-else class="text-gray-500"
    /></Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s;
}

.v-enter-form,
.v-leave-to {
  transform: scale(0.3);
}
</style>
