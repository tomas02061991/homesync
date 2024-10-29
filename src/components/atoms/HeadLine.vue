<script setup lang="ts">
    interface Props {
    headline: string,
    subHeadline?: string
    }

    defineProps<Props>()
</script>

<template>
    <div class="headline">
         <h1>{{ headline }}</h1>
        <span v-if="subHeadline"> {{ subHeadline }}</span>
    </div>
</template>

<style scoped>
    .headline {
        margin: 36px 0;
    }
    h1 {
        margin-bottom: 14px;
    }
    span {
        display: block;
        margin: 0 auto;
        text-align: center;
        font-size: 12px;
    }
</style>
