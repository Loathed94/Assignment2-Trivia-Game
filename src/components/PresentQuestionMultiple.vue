<script setup>
import {ref} from 'vue';
    const emit = defineEmits(["gameCompletedSuccessful"]);
    const sendAnswer = answer => {
        emit("gameCompletedSuccessful", answer);
    }
    const props = defineProps({
        question: {
            type: Object,
            required: true
        }
    })
    const correctAnswer = ref(props.question.correct_answer);
    const incorrectAnswer0 = ref(props.question.incorrect_answers[0]);
    const incorrectAnswer1 = ref(props.question.incorrect_answers[1]);
    const incorrectAnswer2 = ref(props.question.incorrect_answers[2]);
</script>

<template>
    <button type="button" @click="sendAnswer(correctAnswer)" 
        class="bg-emerald-400 text-white p-2 rounded">
        {{correctAnswer}}</button>
    <button type="button" @click="sendAnswer(incorrectAnswer0)" 
        class="bg-emerald-400 text-white p-2 rounded">
        {{incorrectAnswer0}}</button>
    <button type="button" @click="sendAnswer(incorrectAnswer1)" 
        class="bg-emerald-400 text-white p-2 rounded">
        {{incorrectAnswer1}}</button>
    <button type="button" @click="sendAnswer(incorrectAnswer2)" 
        class="bg-emerald-400 text-white p-2 rounded">
        {{incorrectAnswer2}}</button>
</template>

<style scoped>

</style>