<script setup lang="ts">
import type { TodoItem } from '@/services/todo/types'
import { useTodoStore } from '@/stores/todo'
import { toRefs } from 'vue'

interface Props {
  item: TodoItem
}
const props = defineProps<Props>()
const { item } = toRefs(props)

const store = useTodoStore()

const completeItem = () => {
  store
    .updateItem(item.value.id.toString(), { completed: !item.value.completed })
    .then((newItem) => {
      if (newItem) item.value = newItem
    })
}
</script>

<template>
  <div @click="completeItem" :class="{ completed: item.completed }">{{ item.title }}</div>
</template>

<style scoped>
div {
  cursor: pointer;
}
.completed {
  background-color: aqua;
  text-decoration: line-through;
}
</style>
