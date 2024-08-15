<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import SpinnerJSON from '@/assets/lottie/Spinner.json'
</script>

<template>
  <Vue3Lottie :animation-data="SpinnerJSON" :height="200" :width="200" />
</template>

<style scoped></style>
