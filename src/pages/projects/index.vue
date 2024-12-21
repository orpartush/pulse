<script setup lang="ts">
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { usePageStore } from '@/stores/page'
import { columns } from '@/utils/projectsColumns'
import { useProjectsStore } from '@/stores/loaders/projects'
import { storeToRefs } from 'pinia'
import { useCollabs } from '@/composables/collabs'

usePageStore().pageData.title = 'Projects'

const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader
await getProjects()

const { getGroupedCollabs, groupedCollabs } = useCollabs()

getGroupedCollabs(projects.value)

const projectColumns = columns(groupedCollabs)
</script>

<template>
  <DataTable v-if="projects" :columns="projectColumns" :data="projects" />
</template>

<style lang=""></style>
