<script setup lang="ts">
import { ref } from 'vue'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { usePageStore } from '@/stores/page'
import { projectsQuery, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/projectsColumns'
import { useErrorStore } from '@/stores/error'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)

const getProjects = async () => {
  const { data, error, status } = await projectsQuery
  if (error) useErrorStore().setError({ error, customCode: status })

  projects.value = data
}
await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

<style lang=""></style>
