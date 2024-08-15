<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import { useAsyncState } from '@vueuse/core'
import { useRoute } from 'vue-router'
import TodoItem from '@/components/todo/TodoItem.vue'
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue'
const route = useRoute()
const store = useTodoStore()
const { state, isReady, isLoading } = useAsyncState(
  store.getList(route.params.id as string).then((list) => list),
  null
)
const updateItem = (id: number) => {
  if (state?.value?.items) {
    const index = state.value.items.findIndex((element) => element.id === id)
    store
      .updateItem(id.toString(), { completed: !state.value.items[index].completed })
      .then((elm) => {
        if (state?.value?.items && elm) {
          state.value.items[index] = elm
        }
      })
  }
}
</script>
<template>
  <LoadingSpinner v-if="isLoading" />
  <main v-if="isReady">
    <h1>{{ state?.title }}</h1>
    <TodoItem
      v-for="item in state?.items"
      :key="item.id"
      :item="item"
      @update="updateItem"
    ></TodoItem>
  </main>
</template>
