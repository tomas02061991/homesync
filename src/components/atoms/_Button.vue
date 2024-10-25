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

<style scoped>
  button {
    display: block;
    height: 40px;
    min-width: 180px;
    border-radius: 10px;
    text-transform: uppercase;
    border: none;
    color: white;
    margin: 10px auto;
    margin-top: 56px;
    padding: 14px 50px;
    background-image: linear-gradient(90deg, #9BCED5 0%, #99CDD4 6%, #93C7CE 30%, #5E9299 100%); 
  }
</style>
