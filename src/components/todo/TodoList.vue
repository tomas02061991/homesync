<script setup lang="ts">
import type { TodoList } from '@/services/todo/types'

defineProps<{
  items: Array<TodoList>
}>()
</script>
<template>
  <ul>
    <li>
      <p>name</p>
      <p>items</p>
    </li>
    <RouterLink :to="`/todo/${item.id}`" v-for="item in items" :key="item.id">
      <li>
        <p>{{ item.title }}</p>
        <p>{{ item.item_count[0].count }}</p>
      </li>
    </RouterLink>
  </ul>
</template>
<style scoped>
ul {
  padding: 0;
}
li {
  text-decoration: none;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
</style>
