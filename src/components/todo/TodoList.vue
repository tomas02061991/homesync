<script setup lang="ts">
import type { TodoList } from '@/services/todo/types'

defineProps<{
  items: Array<TodoList>
}>()
</script>
<template>
  <ul>
    <RouterLink :to="`/todo/${item.id}`" v-for="item in items" :key="item.id">
      <li>
        {{ item.title }}
      </li>
    </RouterLink>
  </ul>
</template>
<style scoped></style>
