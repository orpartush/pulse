<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const projects = ref<Tables<'projects'>[] | null>(null)

const getProjects = async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) console.log('error:', error)
  console.log('projects:', data)
  projects.value = data
}
;(async () => await getProjects())()
</script>

<template>
  <div>Projects Page</div>
  <RouterLink to="/"> Go to home </RouterLink>
  <ul>
    <li v-for="project in projects" :key="project.id">
      {{ project. }}
    </li>
  </ul>
</template>

<style lang=""></style>
