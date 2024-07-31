<script setup lang="ts">
import { ref, computed } from 'vue'
import TextField from '../atoms/TextField.vue'
import Button from '../atoms/_Button.vue'
import { useAuthStore } from '@/stores/auth'

interface Errors {
  email?: string
  password?: string
  passwordRepeat?: string
}

const email = ref('')
const password = ref('')
const validatePassword = ref('')

const isEmailValid = computed(() => email.value.includes('@'))
const isPasswordValid = computed(() => password.value.length > 5)
const isPasswordRepeatValid = computed(() => password.value === validatePassword.value)

const errors = ref<Errors>({})
const status = ref('')

const authStore = useAuthStore()

const validateField = (field: 'email' | 'password' | 'passwordRepeat') => {
  errors.value[field] = '' // Clear previous error for the field
  if (field === 'email' && !isEmailValid.value) {
    errors.value.email = 'Invalid email address.'
  }
  if (field === 'password' && !isPasswordValid.value) {
    errors.value.password = 'Invalid password'
  }
  if (field === 'passwordRepeat' && !isPasswordRepeatValid.value) {
    errors.value.passwordRepeat = 'Passwords do not match'
  }
}

const signUp = () => {
  if (errors.value.email || errors.value.password || errors.value.passwordRepeat) {
    return
  }
  authStore
    .signup(email.value, password.value)
    .then(() => (status.value = 'Account created'))
    .catch(() => (status.value = 'creation failed'))
}
</script>
<template>
  <form @submit.prevent="signUp">
    <TextField
      v-model="email"
      placeholder="sample@gmail.com"
      label="email"
      type="email"
      :error="errors.email"
      @blur="validateField('email')"
    />
    <TextField
      v-model="password"
      placeholder="sample123"
      label="password"
      type="password"
      :error="errors.password"
      @blur="validateField('password')"
    />
    <TextField
      v-model="validatePassword"
      placeholder="sample123"
      label="retype password"
      type="password"
      :error="errors.passwordRepeat"
      @blur="validateField('passwordRepeat')"
    />
    <Button type="submit">Register</Button>
  </form>
</template>

<style scoped></style>
