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

const emit = defineEmits(['update'])
</script>

<template>
  <div @click="emit('update', item.id)" :class="{ completed: item.completed }">{{ item.title }}</div>
</template>

<style scoped>
div {
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
}
</style>
