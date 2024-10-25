<script setup lang="ts">
interface Props {
  placeholder?: string
  label?: string
  tip?: string
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
    <span class="tipMessage" v-if="!error && tip">{{ tip }}</span>
    <span class="errorMessage" v-if="error">{{ error }}</span>
  </label>
</template>

<style scoped>
input {
  padding: 8px 12px;
  border-radius: 10px;
  background-color: var(--hs-secondary-color);
  width: 100%;
  height: 48px;
  display: block;
  border: 2px solid var(--hs-primary-color);
  &::placeholder {
  color: var(--hs-text-secondary-color);
  opacity: 1;
}
}
label {
  display: block;
  margin: 12px 0;
}
.tipMessage{
  font-size: 12px;
}
.error {
  border-color: var(--hs-error-color);
}
.errorMessage {
  color: var(--hs-error-color);
  text-transform: initial;
}
</style>
