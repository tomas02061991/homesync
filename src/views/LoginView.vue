<script setup lang="ts">
import HeadLine from '@/components/atoms/HeadLine.vue';
import LoginForm from '@/components/LoginForm.vue'
import router from '@/router'
</script>

<template>
  <HeadLine headline="Sign in" sub-headline="Lorem ipsum dolor sit amet lorem ispum dolor" />
  <main>
    <LoginForm @authenticated="router.push({ name: 'home' })"></LoginForm>
  </main>
</template>
