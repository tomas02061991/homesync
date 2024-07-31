<script setup lang="ts">
defineProps<{
  title: string
  target: string
}>()
</script>
<template>
  <RouterLink :to="target">
    <button>
      <p>{{ title }}</p>
    </button>
  </RouterLink>
</template>

<style scoped></style>
