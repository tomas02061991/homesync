<script setup lang="ts">
import { ref } from 'vue'
import TextField from './atoms/TextField.vue'
import Button from '@/components/atoms/_Button.vue'
import { useAuthStore } from '@/stores/auth'
const email = ref('')
const password = ref('')

const emit = defineEmits(['authenticated'])

const authStore = useAuthStore()

const login = async () => {
  authStore
    .login(email.value, password.value)
    .then(() => emit('authenticated'))
    .catch((error) => console.log(error))
}
</script>

<template>
  <form @submit.prevent="login">
    <TextField type="email" label="Email" v-model="email" />
    <TextField type="password" label="Password" v-model="password" />
    <Button type="submit">Login</Button>
  </form>
</template>

<style scoped></style>
