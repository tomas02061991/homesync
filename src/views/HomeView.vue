<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import FeatureWall from '@/components/FeatureWall.vue'
import FamilyForm from '@/components/FamilyForm.vue'
import Button from '@/components/atoms/_Button.vue'
import { RouterLink } from 'vue-router'

const store = useAuthStore()
</script>

<template>
  <main>
    <div v-if="!store.isAuthenticated">
      <RouterLink to="/signup">
        <Button>Sign Up</Button>
      </RouterLink>
      <RouterLink to="/login" >
        <Button>Log in</Button>
      </RouterLink>
    </div>
    <div v-if="store.isAuthenticated">
      <FamilyForm v-if="store.getUser.families.length === 0"/>
      <FeatureWall v-else></FeatureWall>
    </div>
  </main>
</template>
