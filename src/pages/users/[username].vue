<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useErrorStore } from '@/stores/error'
import { profileQuery } from '@/utils/supaQueries'
import type { Tables } from 'database/types'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const { username } = useRoute('/users/[username]').params

const profile = ref<Tables<'profiles'> | null>(null)

const getProfile = async () => {
  const { data, error, status } = await profileQuery({
    column: 'username',
    value: username,
  })

  if (error) useErrorStore().setError({ error, customCode: status })

  profile.value = data
}

await getProfile()
</script>

<template>
  <div class="mx-auto mb-10 flex w-full flex-col items-center justify-center py-10 text-center">
    <div class="flex flex-col items-center justify-center pb-4">
      <Avatar size="lg">
        <AvatarImage :src="profile?.avatar_url || ''" alt="@radix-vue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <p class="mt-2 text-gray-500">{{ profile?.username }}</p>
      <h1 class="mt-5 text-4xl font-bold">{{ profile?.full_name }}</h1>
      <p class="mt-2 text-sm">{{ profile?.bio }}</p>
    </div>
    <Button>Edit profile</Button>
  </div>
</template>
