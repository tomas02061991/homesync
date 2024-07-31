<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import router from '@/router'
</script>

<template>
  <main>
    <LoginForm @authenticated="router.push({ name: 'home' })"></LoginForm>
  </main>
</template>
