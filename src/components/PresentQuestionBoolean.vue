<!--Feature components I can add to any view-->
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

const arrayForShuffling = [props.question.correct_answer, props.question.incorrect_answers[0]];
const shuffledArray = shuffleArray(arrayForShuffling);
const firstAnswer = ref(arrayForShuffling[0]);
const secondAnswer = ref(arrayForShuffling[1]);

//Variables linked to the v-model when changes to the answer options are being done
//const pickedOption = ref("");

</script>
<template>
    <!--Button to generate a question from the API-->
    <button type="button" @click="sendAnswer(firstAnswer)" 
        class="bg-emerald-400 text-white p-2 rounded mx-4">
        {{firstAnswer}}</button>

    <button type="button" @click="sendAnswer(secondAnswer)" 
        class="bg-emerald-400 text-white p-2 rounded mx-4">
        {{secondAnswer}}</button>

<!-- Generate different amount of buttons regarding what type is chosen; true/false or multiple choice -->
    
   
</template>

<style scoped>
</style>