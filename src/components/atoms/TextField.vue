<script setup lang="ts">
interface Props {
  placeholder?: string
  label: string
  type: 'date' | 'datetime' | 'email' | 'text' | 'password'
  error?: string
}

defineProps<Props>()

const model = defineModel({ required: true })
</script>

<template>
  <label
    >{{ label }}
    <input
      :class="error && 'error'"
      v-model="model"
      :placeholder="placeholder"
      :type
      @blur="$emit('blur')"
    />
    <span class="errorMessage" v-if="error">{{ error }}</span>
  </label>
</template>

<style scoped>
input {
  padding: 8px 12px;
  border-radius: 12px;
  display: block;
  border: 2px solid black;
}
label {
  text-transform: uppercase;
  display: block;
  margin: 12px 0;
}
.error {
  border-color: red;
}
.errorMessage {
  color: red;
  text-transform: initial;
}
</style>
