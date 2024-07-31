<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = useTodoStore()
const list = store.getList(route.params.id as string)
</script>
<template>
  <main></main>
</template>
