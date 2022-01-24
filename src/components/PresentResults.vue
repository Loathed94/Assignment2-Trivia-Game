<script setup>
    const props = defineProps({
        result: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <li>
        <div>{{result.question}}</div>
        <div>{{result.correct_answer}}</div>
        <div>{{result.user_answer}}</div>
        <button class="bg-yellow-500 p-3 rounded text-sm" @click="onFavouriteClick">Favourite</button>
    </li>
</template>

<style scoped>

</style>