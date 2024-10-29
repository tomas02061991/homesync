<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/layoutElements/NavBar.vue';
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()


</script>

<template>
  <header>
    <NavBar v-if="authStore.isAuthenticated"/>
  </header>
  <main>
  <RouterView />
</main>

</template>

<style scoped>

</style>
