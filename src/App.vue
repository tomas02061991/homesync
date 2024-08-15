<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Button from './components/atoms/_Button.vue'
import { computed } from 'vue'

const authStore = useAuthStore()

const username = computed(() => {
  if (authStore.getUser.meta_data) {
    console.log(authStore.getUser)
    return `${authStore.getUser?.meta_data.first_name} ${authStore.getUser?.meta_data.last_name}`
  } else {
    return ''
  }
})
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/signup" v-if="!authStore.getUser.aud">
        <Button>Sign Up</Button>
      </RouterLink>
      <RouterLink to="/login" v-if="!authStore.getUser.aud">
        <Button>Log in</Button>
      </RouterLink>
      {{ username }}
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  height: 80px;
  width: 100vw;
  background-color: #6eacb5;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 40px;
  display: flex;
  justify-content: end;
}
</style>
