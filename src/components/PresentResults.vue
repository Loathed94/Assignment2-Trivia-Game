<script setup>

    const props = defineProps({
        result: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <li class="mb-10">
        <div>Question: {{result.question}}</div>
        <div>Correct answer: {{result.correct_answer}}</div>
        <div>User's answer: {{result.user_answer}}</div>
    </li>
</template>

<style scoped>

</style>