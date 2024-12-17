<script setup lang="ts">
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { usePageStore } from '@/stores/page'
import { columns } from '@/utils/projectsColumns'
import { useProjectsStore } from '@/stores/loaders/projects'
import { storeToRefs } from 'pinia'

usePageStore().pageData.title = 'Projects'

const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader
await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

<style lang=""></style>
