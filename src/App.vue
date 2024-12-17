<script setup lang="ts">
import { storeToRefs } from 'pinia'
import AppErrorPage from './components/AppError/AppErrorPage.vue'
import AuthLayout from './components/Layout/main/AuthLayout.vue'
import { useErrorStore } from './stores/error'
import { onErrorCaptured } from 'vue'
import { useAuthStore } from './stores/auth'

const { activeError } = storeToRefs(useErrorStore())
const errorStore = useErrorStore()

onErrorCaptured((error) => {
  errorStore.setError({ error })
})
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="activeError" />
    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name" />
        <template #fallback> <span>Loading...</span> </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
