<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit'
}
const props = withDefaults(defineProps<Props>(), {
  type: 'button'
})
</script>

<template>
  <button :type @click="$emit('click')"><slot></slot></button>
</template>
<style scoped></style>
