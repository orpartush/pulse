<script setup lang="ts"></script>

<template>
  <div>Home Page</div>
  <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }"> Go to project 1 </RouterLink>
</template>

<style lang=""></style>
