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
    function shuffleArray(array) {
        return array.sort( ()=>Math.random()-0.5 );
    }

const arrayForShuffling = [props.question.correct_answer, props.question.incorrect_answers[0], props.question.incorrect_answers[1], props.question.incorrect_answers[2]];
const shuffledArray = shuffleArray(arrayForShuffling);
const firstAnswer = ref(arrayForShuffling[0]);
const secondAnswer = ref(arrayForShuffling[1]);
const thirdAnswer = ref(arrayForShuffling[2]);
const fourthAnswer = ref(arrayForShuffling[3]);
    
</script>

<template>
    <button type="button" @click="sendAnswer(firstAnswer)" 
        class="bg-emerald-400 text-white p-2 rounded mx-2">
        {{firstAnswer}}</button>
    <button type="button" @click="sendAnswer(secondAnswer)" 
        class="bg-emerald-400 text-white p-2 rounded mx-2">
        {{secondAnswer}}</button>
    <button type="button" @click="sendAnswer(thirdAnswer)" 
        class="bg-emerald-400 text-white p-2 rounded mx-2">
        {{thirdAnswer}}</button>
    <button type="button" @click="sendAnswer(fourthAnswer)" 
        class="bg-emerald-400 text-white p-2 rounded mx-2">
        {{fourthAnswer}}</button>
</template>

<style scoped>

</style>