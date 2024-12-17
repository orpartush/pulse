import { ref } from 'vue'
import { defineStore } from 'pinia'
import { projectsQuery, type Projects } from '@/utils/supaQueries'
import { useErrorStore } from '../error'
import { useMemoize } from '@vueuse/core'

export const useProjectsStore = defineStore('project-store', () => {
  const projects = ref<Projects>([])
  const loadProjects = useMemoize(async (key: string) => await projectsQuery)

  const validateCache = () => {
    if (!projects.value?.length) return
    projectsQuery.then(({ data, error }) => {
      if (JSON.stringify(projects.value) === JSON.stringify(data)) {
        console.log('Cached and fresh data matched!')
      } else {
        console.log('Cached and data are not the same')
        // Delete cached data
        loadProjects.delete('projects')
        if (!error && data) projects.value = data
      }
    })
  }

  const getProjects = async () => {
    const { data, error, status } = await loadProjects('projects')
    if (error) useErrorStore().setError({ error, customCode: status })
    projects.value = data || []
    validateCache()
  }

  return {
    projects,
    getProjects,
  }
})
