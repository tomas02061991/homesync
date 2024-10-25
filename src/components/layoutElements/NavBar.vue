<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Button from '../atoms/_Button.vue'
import { computed } from 'vue'

const authStore = useAuthStore()

const user = authStore.getUser
</script>
<template>
    <nav>
      <img 
      :src="user.meta_data.avatar? user.meta_data.avatar :
       `https://ui-avatars.com/api/?name=${user.meta_data.first_name}+${user.meta_data.last_name}`"/>
    </nav>
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
  justify-content: start;
}
img {
  border-radius:  100%;
}
</style>