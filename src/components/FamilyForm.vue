<script setup lang="ts">
import HeadLine from '@/components/atoms/HeadLine.vue';
import TextField from './atoms/TextField.vue';

const family_name = ""

</script>
<template>
    <div>
        <HeadLine headline="You have no family in Home Sync :(" sub-headline="Start your family today"/>
        <TextField type="text" placeholder="What should your family be called?" v-model="family_name"/>
        <h2>Add family members</h2>
    </div>
</template>
<style lang="css" scoped>
    h2 {
        margin-top: 60px;
    }
</style>