<script setup lang="ts">
import TodoList from '@/components/todo/TodoList.vue'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
store.fetchLists()
</script>
<template>
  <main>
    <TodoList :items="store.getLists" />
  </main>
</template>
