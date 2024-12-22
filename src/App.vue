<script setup lang="ts">
import { storeToRefs } from 'pinia'
import AppErrorPage from './components/AppError/AppErrorPage.vue'
import { useErrorStore } from './stores/error'
import { defineAsyncComponent, onErrorCaptured, onMounted } from 'vue'
import { useAuthStore } from './stores/auth'

const { activeError } = storeToRefs(useErrorStore())
const errorStore = useErrorStore()

onErrorCaptured((error) => {
  errorStore.setError({ error })
})

onMounted(() => {
  useAuthStore().trackAuthChanges()
})

const { user } = storeToRefs(useAuthStore())
const AuthLayout = defineAsyncComponent(() => import('./components/Layout/main/AuthLayout.vue'))
const GuestLayout = defineAsyncComponent(() => import('./components/Layout/main/GuestLayout.vue'))
</script>

<template>
  <Component :is="user ? AuthLayout : GuestLayout">
    <AppErrorPage v-if="activeError" />
    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name" />
        <template #fallback> <span>Loading...</span> </template>
      </Suspense>
    </RouterView>
  </Component>
</template>
