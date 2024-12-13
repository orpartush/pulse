<script setup lang="ts">
import { usePageStore } from '@/stores/page'
usePageStore().pageData.title = 'Homepage'
</script>

<template>
  <div>Home Page</div>
</template>

<style lang=""></style>
