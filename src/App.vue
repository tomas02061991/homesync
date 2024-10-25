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
nav {
  height: 80px;
  width: 100vw;
  background-color: var(--primary-color);
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 40px;
  display: flex;
  justify-content: end;
}
</style>
