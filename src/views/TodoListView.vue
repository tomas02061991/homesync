<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import { useAsyncState } from '@vueuse/core'
import { useRoute } from 'vue-router'
import TodoItem from '@/components/todo/TodoItem.vue'
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import {getCurrentInstance} from 'vue'
import Button from '@/components/atoms/_Button.vue'
const route = useRoute()
const store = useTodoStore()
const { state, isReady, isLoading } = useAsyncState(
  store.getList(route.params.id as string).then((list) => list),
  null
)
const instance = getCurrentInstance()
const updateItem = (id: number) => {
  if (state?.value?.items) {
    const index = state.value.items.findIndex((element) => element.id === id)
    store
      .updateItem(id.toString(), { completed: !state.value.items[index].completed })
      .then((elm) => {
        if (state?.value?.items && elm) {
          state.value.items[index] = elm[0]
          instance?.proxy?.$forceUpdate()
        }
      })
  }
}
const archiveItem = (id:number) => {
  if (state?.value?.items) {
    const index = state.value.items.findIndex((element) => element.id === id)
    store
      .deleteItem(id.toString())
      .then((elm) => {
        if (state?.value?.items && elm) {
          state.value.items.splice(index, 1)
          instance?.proxy?.$forceUpdate()
        }
      })
  }
}
</script>
<template>
  <LoadingSpinner v-if="isLoading" />
  <main v-if="isReady">
    <h1>{{ state?.title }}</h1>
    <Button ><PlusIcon class="icon"/></Button>
    <TodoItem
      v-for="item in state?.items"
      :key="item.id"
      :item="item"
      @update="updateItem"
    ></TodoItem>
  </main>
</template>

<style scoped>
.icon {
  width: 36px;
  height: 36px;
}
</style>
