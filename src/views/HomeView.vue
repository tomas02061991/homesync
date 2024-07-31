<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import FeatureWall from '@/components/FeatureWall.vue'

const store = useAuthStore()
</script>

<template>
  <main>
    <div v-if="store.getUser">
      <FeatureWall></FeatureWall>
    </div>
  </main>
</template>
